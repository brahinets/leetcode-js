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
    const result: Set<string> = new Set<string>();
    const operands: string[][] = [...collectOperands(digits)]

    combinations("", operands, result, operands.length)

    return [...result]
}

function combinations(char: string, operands: string[][], result: Set<string>, operandsNumber: number): void {
    if (operands.length > 0) {
        for (const ch of operands[0]) {
            const combination: string = char + ch

            if (combination.length === operandsNumber) {
                result.add(combination)
            }

            combinations("" + char + ch, operands.slice(1), result, operandsNumber)
        }
    }
}

function collectOperands(digits: string): string[][] {
    const pairs: string[][] = []

    for (const digit of digits) {
        const letter: string[] | undefined = DIAL_MAP.get(digit)

        if (letter === undefined) {
            throw new Error("Unsupported digit")
        } else {
            pairs.push(letter)
        }
    }

    return pairs;
}
