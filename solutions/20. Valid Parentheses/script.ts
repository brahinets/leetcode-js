export {isValid}

const BRACES: Map<string, string> = new Map<string, string>([
    ["[", "]"],
    ["{", "}"],
    ["(", ")"]
])

const isValid = function (s: string): boolean {
    const stack: string[] = []

    for (const ch of s) {
        if (BRACES.has(ch)) {
            stack.push(ch)
        } else {
            const openedPair: string | null = stack.pop() || null
            const closedPair: string | null = getKeyByValue(BRACES, ch)

            if (openedPair !== closedPair) {
                return false
            }
        }
    }

    return stack.length === 0
}

function getKeyByValue(map: Map<string, string>, targetValue: string): string | null {
    for (const [key, value] of map) {
        if (value === targetValue) {
            return key
        }
    }

    return null
}
