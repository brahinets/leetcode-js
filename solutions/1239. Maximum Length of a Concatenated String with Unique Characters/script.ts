export {maxLength}

function maxLength(arr: string[]): number {
    return backtrack(arr, "")
}

function backtrack(strings: string[], prefix: string): number {
    let result: number = prefix.length;

    for (let i: number = 0; i < strings.length; i++) {
        const candidate: string = prefix + strings[i];

        if (allLettersUnique(candidate)) {
            result = Math.max(result, candidate.length)
            result = backtrack(strings.slice(1), candidate)
        }
    }

    return result
}

function allLettersUnique(str: string): boolean {
    return str.length === new Set(str).size
}
