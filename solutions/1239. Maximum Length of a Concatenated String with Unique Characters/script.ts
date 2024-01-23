export {maxLength}

function maxLength(arr: string[]): number {
    let maxLength: number = 0

    for (let start: number = 0; start < arr.length; start++) {
        let current: string = ""

        for (let append: number = start; append < arr.length; append++) {
            const candidate: string = current + arr[append]

            if (allLettersUnique(candidate)) {
                current = candidate
                maxLength = Math.max(maxLength, candidate.length)
            }
        }
    }

    return maxLength
}

function allLettersUnique(str: string): boolean {
    return str.length === new Set(str).size
}
