export {isValid}

const BRACES: Map<string, string> = new Map<string, string>([
    ["[", "]"],
    ["{", "}"],
    ["(", ")"]
])

const isValid = function (s: string): boolean {
    const allowedCharacters: string[] = [...BRACES.keys(), ...BRACES.values()]
    const openedBraces: string[] = []

    for (const ch of s) {
        if (!allowedCharacters.includes(ch)) {
            throw new Error("Illegal character")
        }

        if (BRACES.has(ch)) {
            openedBraces.push(ch)
        } else {
            const openedPair: string | null = openedBraces.pop() || null
            const closedPair: string | null = getKeyByValue(BRACES, ch)

            if (openedPair !== closedPair) {
                return false
            }
        }
    }

    return openedBraces.length === 0
}

function getKeyByValue(map: Map<string, string>, targetValue: string): string | null {
    for (const [key, value] of map) {
        if (value === targetValue) {
            return key
        }
    }

    return null
}
