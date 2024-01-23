export {maxLength}

function maxLength(arr: string[]): number {
    return backtrack(arr, "", 0)
}

function backtrack(strings: string[], resultString: string, start: number): number {
    let result: number = resultString.length;

    for (let i: number = start; i < strings.length; i++) {
        const candidate: string = resultString + strings[i];

        if (allLettersUnique(candidate)) {
            result = Math.max(result, candidate.length)
            result = backtrack(strings, candidate, start + 1)
        }
    }

    return result
}

function allLettersUnique(str: string): boolean {
    return str.length === new Set(str).size
}
