export {maxLength}

function maxLength(arr: string[]): number {
    return backtrack(arr, "", 0)
}

function backtrack(strings: string[], prefix: string, start: number): number {
    let result: number = prefix.length;

    for (let i: number = start; i < strings.length; i++) {
        const candidate: string = prefix + strings[i];

        if (allLettersUnique(candidate)) {
            result = Math.max(result, backtrack(strings, candidate, i + 1))
        }
    }

    return result
}

function allLettersUnique(str: string): boolean {
    return str.length === new Set(str).size
}
