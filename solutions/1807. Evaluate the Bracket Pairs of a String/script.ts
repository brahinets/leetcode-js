export {evaluate}

const UNKNOWN_VALUE: string = '?'

function evaluate(text: string, knowledge: string[][]): string {
    const valuesByKey: Map<string, string> = collectValuesByKey(knowledge)
    const parts: string[] = []
    let key: string = ''
    let isInsideBrackets: boolean = false

    for (const character of text) {
        if (character === '(') {
            isInsideBrackets = true
            key = ''
        } else if (character === ')') {
            isInsideBrackets = false
            parts.push(valuesByKey.get(key) ?? UNKNOWN_VALUE)
        } else if (isInsideBrackets) {
            key += character
        } else {
            parts.push(character)
        }
    }

    return parts.join('')
}

function collectValuesByKey(knowledge: string[][]): Map<string, string> {
    const valuesByKey: Map<string, string> = new Map<string, string>()

    for (const entry of knowledge) {
        const [key, value]: string[] = entry
        valuesByKey.set(key, value)
    }

    return valuesByKey
}
