export {braceExpansionII}

interface ParseState {
    position: number
}

function braceExpansionII(expression: string): string[] {
    const state: ParseState = {position: 0}
    const words: Set<string> = parseUnion(expression, state)

    return [...words].sort()
}

function parseUnion(expression: string, state: ParseState): Set<string> {
    const words: Set<string> = new Set<string>()
    let hasMoreTerms: boolean = true

    while (hasMoreTerms) {
        for (const word of parseConcatenation(expression, state)) {
            words.add(word)
        }

        hasMoreTerms = expression[state.position] === ','

        if (hasMoreTerms) {
            state.position++
        }
    }

    return words
}

function parseConcatenation(expression: string, state: ParseState): Set<string> {
    let words: Set<string> = new Set<string>([''])

    while (state.position < expression.length
        && expression[state.position] !== ','
        && expression[state.position] !== '}') {
        words = concatenate(words, parseFactor(expression, state))
    }

    return words
}

function concatenate(prefixes: Set<string>, suffixes: Set<string>): Set<string> {
    const words: Set<string> = new Set<string>()

    for (const prefix of prefixes) {
        for (const suffix of suffixes) {
            words.add(prefix + suffix)
        }
    }

    return words
}

function parseFactor(expression: string, state: ParseState): Set<string> {
    if (expression[state.position] === '{') {
        state.position++
        const words: Set<string> = parseUnion(expression, state)
        state.position++

        return words
    }

    let letters: string = ''

    while (state.position < expression.length && isLowercaseLetter(expression[state.position])) {
        letters += expression[state.position]
        state.position++
    }

    return new Set<string>([letters])
}

function isLowercaseLetter(character: string): boolean {
    return character >= 'a' && character <= 'z'
}
