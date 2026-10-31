#!/usr/bin/env bash
# Creates a solution template for a LeetCode problem.
#
# Usage: ./new-solution.sh <leetcode-url-or-slug>
#
# Fetches the problem statement from leetcode.com (falls back to
# leetcode.cn, then to a text-proxy scrape of the problem page),
# then generates:
#   - solutions/<id>. <title>/README.md      (description + constraints)
#   - solutions/<id>. <title>/script.ts      (empty typed stub)
#   - solutions/<id>. <title>/__tests__/script.test.ts (one test per example)
# and registers the solution in the root README.md.
set -euo pipefail

if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <leetcode-url-or-slug>" >&2
    exit 1
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
INPUT="$1"

SLUG="$(echo "$INPUT" | sed -E 's~https?://[^/]+/problems/([a-z0-9-]+).*~\1~')"
if ! echo "$SLUG" | grep -qE '^[a-z0-9-]+$'; then
    SLUG="$INPUT"
fi
if ! echo "$SLUG" | grep -qE '^[a-z0-9-]+$'; then
    echo "Error: could not extract a problem slug from '$INPUT'" >&2
    exit 1
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

USER_AGENT='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'
QUERY="query getQuestion(\$titleSlug: String!) { question(titleSlug: \$titleSlug) { questionFrontendId title difficulty content translatedContent codeSnippets { lang langSlug code } } }"
PAYLOAD="$(printf '{"query":"%s","variables":{"titleSlug":"%s"}}' "$QUERY" "$SLUG")"

MODE=""
for ENDPOINT in "https://leetcode.com/graphql/" "https://leetcode.cn/graphql/"; do
    echo "Fetching problem data from $ENDPOINT ..."
    if curl -sS -f --compressed -m 30 -A "$USER_AGENT" \
        -H 'Content-Type: application/json' \
        -H "Referer: ${ENDPOINT%/graphql/}/problems/$SLUG/" \
        -d "$PAYLOAD" -o "$TMP/question.json" 2>/dev/null \
        "$ENDPOINT" \
        && grep -q '"question"' "$TMP/question.json"; then
        MODE="graphql"
        break
    fi
done

if [[ -z "$MODE" ]]; then
    echo "LeetCode GraphQL is unavailable, falling back to a text proxy ..."
    if curl -sS -f --compressed -m 60 -A "$USER_AGENT" \
        -o "$TMP/page.md" "https://r.jina.ai/https://leetcode.com/problems/$SLUG/description/" 2>/dev/null; then
        MODE="scrape"
    else
        echo "Error: all problem data sources failed." >&2
        exit 1
    fi
fi

cat > "$TMP/prepare.mjs" <<'PREPARE_EOF'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const [mode, root, dataPath, slug] = process.argv.slice(2)

const PROBLEM = mode === 'graphql' ? parseGraphql(dataPath) : parseScrape(dataPath, slug)
if (!PROBLEM) {
    console.error('Error: could not parse problem data.')
    process.exit(1)
}

const folder = join(root, 'solutions', PROBLEM.folder)
if (existsSync(folder)) {
    console.error(`Error: solutions/${PROBLEM.folder} already exists.`)
    process.exit(1)
}
mkdirSync(join(folder, '__tests__'), { recursive: true })

writeFileSync(join(folder, 'README.md'), PROBLEM.readme)
writeFileSync(join(folder, 'script.ts'), PROBLEM.script)
writeFileSync(join(folder, '__tests__', 'script.test.ts'), PROBLEM.tests)
registerInRootReadme(root, PROBLEM)

console.log(`Created solutions/${PROBLEM.folder}`)
console.log(`  README.md, script.ts, __tests__/script.test.ts`)
console.log(`Registered the solution in the root README.md`)
console.log('Next: fill in script.ts, rename the generated example tests, then run: npx jest')
if (PROBLEM.degraded) {
    console.log('WARNING: data came from a fallback source - verify the README content.')
}

function parseGraphql(dataPath) {
    const question = JSON.parse(readFileSync(dataPath, 'utf8')).data.question
    const contentHtml = question.content || question.translatedContent || ''
    const snippet = (question.codeSnippets || []).find(
        (candidate) => candidate.langSlug === 'typescript'
    )
    const descriptionHtml = cutBefore(contentHtml, /<p>\s*<strong[^>]*>\s*(Example|Constraints|Your input)/i)
    const description = htmlToText(descriptionHtml)
    const constraints = extractConstraints(contentHtml)
    const followUp = extractFollowUp(contentHtml)
    const examples = extractExamples(contentHtml)
    const readme = buildReadme(
        question.questionFrontendId,
        question.title,
        question.difficulty,
        description,
        constraints,
        followUp
    )
    return {
        id: question.questionFrontendId,
        title: question.title,
        folder: `${question.questionFrontendId}. ${question.title}`,
        readme,
        script: snippet ? buildScript(snippet.code) : placeholderScript(),
        tests: snippet && examples.length
            ? buildTests(question.questionFrontendId, question.title, snippet.code, examples)
            : placeholderTests(question.questionFrontendId, question.title),
        degraded: !snippet
    }
}

function parseScrape(dataPath, slug) {
    const markdown = readFileSync(dataPath, 'utf8')
    const body = markdown.replace(/^[\s\S]*?Markdown Content:\s*\n/, '')
    const problemLinkMatch = body.match(/\[([\d]+)\. ([^\]]+)\]\(https:\/\/leetcode\.com\/problems\//)
    const titleMetaMatch = body.match(/^Title:\s*(.+?)\s*(?:-\s*LeetCode)?\s*$/m)
    const id = problemLinkMatch ? problemLinkMatch[1] : null
    const title = problemLinkMatch ? problemLinkMatch[2] : (titleMetaMatch ? titleMetaMatch[1] : slug)
    const folder = id ? `${id}. ${title}` : slug
    const difficultyMatch = body.match(/^(Easy|Medium|Hard)\s*$/m)
    const hintMatch = body.match(/^Hint\s*$/m)
    const exampleIndex = body.search(/\**Example 1:?\**/)
    const constraintsIndex = body.search(/\**Constraints:?\**/)
    const descriptionStart = hintMatch
        ? hintMatch.index + hintMatch[0].length
        : difficultyMatch
            ? difficultyMatch.index + difficultyMatch[0].length
            : 0
    const descriptionSource = body.slice(
        descriptionStart,
        exampleIndex === -1 ? constraintsIndex : exampleIndex
    )
    const description = cleanScrapeText(descriptionSource)
    const constraints = extractScrapeConstraints(body)
    const followUp = extractScrapeFollowUp(body)
    return {
        id: id || slug,
        title,
        folder,
        readme: buildReadme(id || slug, title, difficultyMatch ? difficultyMatch[1] : 'TODO', description, constraints, followUp),
        script: placeholderScript(),
        tests: placeholderTests(id || slug, title),
        degraded: true
    }
}

function cutBefore(html, pattern) {
    const match = html.match(pattern)
    return match ? html.slice(0, match.index) : html
}

function htmlToText(html) {
    const segments = html.split(/<\/((?:p|li))>/)
    const paragraphs = []
    for (let index = 0; index < segments.length; index += 2) {
        const isListItem = segments[index + 1] === 'li'
        const text = inlineText(segments[index]).replace(/\s+/g, ' ').trim()
        if (!text) {
            continue
        }
        const prefix = isListItem ? '- ' : ''
        const wrapped = wrap(text, 120 - prefix.length)
        paragraphs.push(prefix + wrapped.join(`\n${' '.repeat(prefix.length)}`))
    }
    return paragraphs.join('\n\n')
}

function inlineText(html) {
    return decodeEntities(
        html
            .replace(/<sup(\s[^>]*)?>/g, '^')
            .replace(/<\/sup>/g, '')
            .replace(/<sub(\s[^>]*)?>/g, '_')
            .replace(/<\/sub>/g, '')
            .replace(/<(code|tt)(\s[^>]*)?>/g, '`')
            .replace(/<\/(code|tt)>/g, '`')
            .replace(/<br(\s[^>]*)?\/?>/g, '\n')
            .replace(/<[^>]+>/g, '')
    )
}

function decodeEntities(text) {
    return text
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&amp;/g, '&')
}

function extractConstraints(html) {
    const lists = [...html.matchAll(/<ul>([\s\S]*?)<\/ul>/g)]
    if (!lists.length) {
        return []
    }
    const items = lists[lists.length - 1][1].match(/<li[\s>][\s\S]*?<\/li>/g) || []
    return items
        .map((item) => inlineText(item).replace(/\s+/g, ' ').replace(/^-\s*/, '').trim())
        .filter(Boolean)
}

function extractFollowUp(html) {
    const match = html.match(/<strong>Follow-?[uU]p:?<\/strong>\s*([\s\S]*?)<\/p>/)
    return match ? inlineText(match[1]).replace(/\s+/g, ' ').trim() : null
}

function extractExamples(html) {
    const examples = []
    const preBlocks = [...html.matchAll(/<pre>([\s\S]*?)<\/pre>/g)].map(
        (match) => decodeEntities(match[1].replace(/<[^>]+>/g, ''))
    )
    for (const block of preBlocks) {
        const outputIndex = block.search(/Output:?/)
        if (outputIndex === -1) {
            continue
        }
        const inputMatch = block.slice(0, outputIndex).match(/Input:?\s*([\s\S]*)/)
        if (!inputMatch) {
            continue
        }
        const afterOutput = block.slice(outputIndex).replace(/^Output:?\s*/, '')
        const explanationIndex = afterOutput.search(/Explanation:?/)
        const output = (
            explanationIndex === -1 ? afterOutput : afterOutput.slice(0, explanationIndex)
        ).trim()
        examples.push({ input: inputMatch[1].trim(), output })
    }
    if (examples.length) {
        return examples
    }
    const labelPattern = /<strong>(Input|Output|Explanation)[s]?:?<\/strong>([\s\S]*?)(?=<strong[^>]*>(?:Input|Output|Explanation|Example|Constraints)|$)/g
    let current = null
    for (const match of html.matchAll(labelPattern)) {
        const value = decodeEntities(match[2].replace(/<[^>]+>/g, ' ')).trim()
        if (match[1] === 'Input') {
            if (current && current.output !== null) {
                examples.push(current)
            }
            current = { input: value, output: null }
        } else if (match[1] === 'Output' && current) {
            current.output = value
        }
    }
    if (current && current.output !== null) {
        examples.push(current)
    }
    return examples
}

function buildReadme(id, title, difficulty, description, constraints, followUp) {
    const lines = []
    lines.push(`# ${id}. ${title}`)
    lines.push('')
    lines.push(`## ${difficulty}`)
    lines.push('')
    lines.push(description || 'TODO: paste the problem description here.')
    if (constraints.length) {
        lines.push('')
        lines.push('### Constraints:')
        lines.push('')
        for (const constraint of constraints) {
            const wrapped = wrap(constraint, 116)
            lines.push(`- ${wrapped[0]}`)
            for (const continuation of wrapped.slice(1)) {
                lines.push(`  ${continuation}`)
            }
        }
    }
    if (followUp) {
        lines.push('')
        lines.push(wrap(`**Follow-up:** ${followUp}`, 120).join('\n'))
    }
    lines.push('')
    return lines.join('\n')
}

function wrap(text, width) {
    const words = text.split(/\s+/)
    const lines = []
    let current = ''
    for (const word of words) {
        const candidate = current ? `${current} ${word}` : word
        if (current && candidate.length > width) {
            lines.push(current)
            current = word
        } else {
            current = candidate
        }
    }
    if (current) {
        lines.push(current)
    }
    return lines
}

function buildScript(snippetCode) {
    const signature = parseFunctionSignature(snippetCode)
    if (signature) {
        const parameters = signature.parameters
            .map((parameter) => `${parameter.name}: ${parameter.type}`)
            .join(', ')
        const lines = []
        const structureImport = structureImportName(signature)
        if (structureImport) {
            lines.push(`import { ${structureImport} } from '../../common/${structureImport}'`)
            lines.push('')
        }
        lines.push(`export { ${signature.name} }`)
        lines.push('')
        lines.push(`function ${signature.name}(${parameters}): ${signature.returnType} {`)
        if (signature.returnType === 'void') {
            lines.push('    // TODO: implement solution')
        } else {
            lines.push("    throw new Error('Not implemented')")
        }
        lines.push('}')
        lines.push('')
        return lines.join('\n')
    }
    const classMatch = snippetCode.match(/class\s+(\w+)/)
    if (classMatch) {
        const lines = []
        lines.push(`export { ${classMatch[1]} }`)
        lines.push('')
        lines.push(`class ${classMatch[1]} {`)
        lines.push('    // TODO: implement solution')
        lines.push('}')
        lines.push('')
        return lines.join('\n')
    }
    return placeholderScript()
}

function parseFunctionSignature(snippetCode) {
    const match = snippetCode.match(/function\s+(\w+)\s*\(([\s\S]*?)\)\s*:\s*([^{]+?)\s*\{/)
    if (!match) {
        return null
    }
    const parameters = splitTopLevel(match[2])
        .map((part) => part.trim().match(/^(\w+)\s*:\s*(.+)$/))
        .filter(Boolean)
        .map((partMatch) => ({ name: partMatch[1], type: partMatch[2].trim() }))
    return { name: match[1], parameters, returnType: match[3].trim() }
}

function structureImportName(signature) {
    const allTypes = signature.parameters.map((parameter) => parameter.type).concat([signature.returnType])
    for (const structureName of ['ListNode', 'TreeNode', 'Node']) {
        if (allTypes.some((type) => new RegExp(`\\b${structureName}\\b`).test(type))) {
            return structureName
        }
    }
    return null
}

function splitTopLevel(text) {
    const parts = []
    let depth = 0
    let insideString = false
    let current = ''
    for (let index = 0; index < text.length; index++) {
        const character = text[index]
        if (insideString) {
            current += character
            if (character === '"' && text[index - 1] !== '\\') {
                insideString = false
            }
            continue
        }
        if (character === '"') {
            insideString = true
        } else if ('[<('.includes(character)) {
            depth++
        } else if (']>)'.includes(character)) {
            depth--
        }
        if (character === ',' && depth === 0) {
            parts.push(current)
            current = ''
        } else {
            current += character
        }
    }
    if (current.trim()) {
        parts.push(current)
    }
    return parts
}

function buildTests(id, title, snippetCode, examples) {
    const signature = parseFunctionSignature(snippetCode)
    if (!signature) {
        return placeholderTests(id, title)
    }
    const lines = []
    lines.push(`import { ${signature.name} } from '../script'`)
    const structureImport = structureImportName(signature)
    if (structureImport) {
        lines.push(`import { ${structureImport} } from '../../../common/${structureImport}'`)
    }
    lines.push('')
    lines.push('')
    lines.push(`describe('${id}. ${title}', (): void => {`)
    examples.forEach((example, exampleIndex) => {
        const assignments = parseAssignments(example.input)
        lines.push(`    it('example ${exampleIndex + 1}', (): void => {`)
        const matched = matchInputs(assignments, signature.parameters)
        for (const { parameter, assignment } of matched) {
            const value = assignment ? parseValue(assignment.raw) : undefined
            const formatted = value === undefined ? undefined : formatValue(value, parameter.type)
            if (formatted === undefined) {
                lines.push(`        // TODO: provide ${parameter.name}${assignment ? ` from ${assignment.raw}` : ''}`)
                lines.push(`        const ${parameter.name}: ${parameter.type} = null as unknown as ${parameter.type}`)
            } else {
                lines.push(`        const ${parameter.name}: ${parameter.type} = ${formatted}`)
            }
        }
        const arguments_ = signature.parameters.map((parameter) => parameter.name).join(', ')
        lines.push(`        const result: ${signature.returnType} = ${signature.name}(${arguments_})`)
        lines.push('')
        const expectedValue = parseValue(example.output)
        const expected = formatValue(expectedValue, signature.returnType)
        if (expected === undefined) {
            lines.push(`        // TODO: build the expected ${signature.returnType} from ${example.output}`)
            lines.push('        expect(result)')
            lines.push(`            .toEqual(null as unknown as ${signature.returnType})`)
        } else {
            lines.push('        expect(result)')
            lines.push(`            .toEqual(${expected})`)
        }
        lines.push('    })')
        lines.push('')
    })
    while (lines[lines.length - 1] === '') {
        lines.pop()
    }
    lines.push('})')
    lines.push('')
    return lines.join('\n')
}

function parseAssignments(text) {
    const assignments = []
    for (const part of splitTopLevel(text)) {
        const match = part.trim().match(/^([A-Za-z_]\w*)\s*=\s*([\s\S]+)$/)
        if (match) {
            assignments.push({ name: match[1], raw: match[2].trim() })
        }
    }
    return assignments
}

function parseValue(raw) {
    try {
        return JSON.parse(raw)
    } catch {
        return raw
    }
}

function matchInputs(assignments, parameters) {
    const remaining = [...assignments]
    return parameters.map((parameter, index) => {
        const normalized = parameter.name.toLowerCase()
        let assignment = remaining.find(
            (candidate) => candidate.name.toLowerCase().replace(/_/g, '') === normalized
        )
        if (!assignment && assignments.length === parameters.length) {
            assignment = assignments[index]
        }
        if (assignment) {
            remaining.splice(remaining.indexOf(assignment), 1)
        }
        return { parameter, assignment: assignment || null }
    })
}

function formatValue(value, type) {
    if (/\b(ListNode|TreeNode|Node)\b/.test(type)) {
        return undefined
    }
    if (typeof value === 'string') {
        return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
    }
    if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
        return String(value)
    }
    if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
        return `[${value.map((item) => `'${item.replace(/'/g, "\\'")}'`).join(', ')}]`
    }
    if (Array.isArray(value) && !value.some((item) => typeof item === 'string')) {
        return JSON.stringify(value).replace(/,/g, ', ')
    }
    return JSON.stringify(value)
}

function placeholderScript() {
    return '// TODO: copy the TypeScript signature from the problem page\nexport {}\n'
}

function placeholderTests(id, title) {
    const lines = []
    lines.push(`describe('${id}. ${title}', (): void => {`)
    lines.push("    it('fill in after writing the solution', (): void => {")
    lines.push('        // TODO: implement')
    lines.push('    })')
    lines.push('})')
    lines.push('')
    return lines.join('\n')
}

function extractScrapeConstraints(body) {
    const match = body.match(/\**Constraints:?\**\s*\n([\s\S]*?)(?=\n\s*\n(?!\s*\*\s)|\*\*Follow|Follow-up:)/)
    if (!match) {
        return []
    }
    return match[1]
        .split('\n')
        .map((line) => line.replace(/^\s*[-*]\s*/, '').trim())
        .filter(Boolean)
}

function extractScrapeFollowUp(body) {
    const match = body.match(/\**Follow-?[uU]p:?\**\s*([\s\S]*?)(?=\n\s*\n)/)
    return match ? match[1].replace(/^\s*[-*]\s*/, '').trim() : null
}

function cleanScrapeText(text) {
    const junkLine = /^\s*(Topics|Companies|Hint|Description|Editorial|Solutions|Submissions|Code|Testcase|Test Result|Problem List)\s*$/
    const blocks = text
        .split(/\n\s*\n/)
        .map((block) =>
            block
                .split('\n')
                .filter((line) => line.trim() && !line.includes('![') && !line.includes('[](') && !junkLine.test(line))
                .join(' ')
                .replace(/\s+/g, ' ')
                .trim()
        )
        .filter(Boolean)
    return blocks.map((block) => wrap(block, 120).join('\n')).join('\n\n')
}

function registerInRootReadme(root, problem) {
    const readmePath = join(root, 'README.md')
    const readme = readFileSync(readmePath, 'utf8')
    if (readme.includes(`№ [${problem.id}. ${problem.title}]`)) {
        return
    }
    const link = `1. № [${problem.id}. ${problem.title}](solutions/${problem.folder.replace(/ /g, '%20')}/script.ts)`
    const lines = readme.split('\n')
    const problemNumber = parseInt(problem.id, 10)
    let firstGreaterIndex = -1
    let lastEntryIndex = -1
    for (let index = 0; index < lines.length; index++) {
        const entryMatch = lines[index].match(/^\d+\. № \[(\d+)\./)
        if (!entryMatch) {
            if (lastEntryIndex !== -1) {
                break
            }
            continue
        }
        if (firstGreaterIndex === -1 && parseInt(entryMatch[1], 10) > problemNumber) {
            firstGreaterIndex = index
            break
        }
        lastEntryIndex = index
    }
    if (firstGreaterIndex !== -1) {
        lines.splice(firstGreaterIndex, 0, link)
    } else if (lastEntryIndex !== -1) {
        lines.splice(lastEntryIndex + 1, 0, link)
    } else {
        console.error('Warning: could not find the solution list in the root README.md')
        return
    }
    writeFileSync(readmePath, lines.join('\n'))
}
PREPARE_EOF

if [[ "$MODE" == "graphql" ]]; then
    node "$TMP/prepare.mjs" "$MODE" "$ROOT" "$TMP/question.json" "$SLUG"
else
    node "$TMP/prepare.mjs" "$MODE" "$ROOT" "$TMP/page.md" "$SLUG"
fi
