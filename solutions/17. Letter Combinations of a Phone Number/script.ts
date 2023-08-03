export {letterCombinations}

const DIAL_MAP: Map<string, string[]> = new Map<string, string[]>([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
])

function letterCombinations(digits: string): string[] {
    for (const d of digits) {
        if (!DIAL_MAP.has(d)) {
            throw new Error("Unsupported digit")
        }
    }

    throw new Error("Implement me")
}
