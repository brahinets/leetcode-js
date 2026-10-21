export { minOperations }

function minOperations(letters: string): number {
    if (isSorted(letters)) {
        return 0
    }

    if (letters.length === 2) {
        return -1
    }

    if (startsWithMinimumOrEndsWithMaximum(letters)) {
        return 1
    }

    if (
        hasMinimumInProperPrefix(letters) ||
        hasMaximumInProperSuffix(letters)
    ) {
        return 2
    }

    return 3
}

function isSorted(letters: string): boolean {
    for (let index: number = 1; index < letters.length; index++) {
        if (letters[index] < letters[index - 1]) {
            return false
        }
    }

    return true
}

function startsWithMinimumOrEndsWithMaximum(letters: string): boolean {
    const minimumCharacter: string = findMinimumCharacter(letters)
    const maximumCharacter: string = findMaximumCharacter(letters)

    return (
        letters[0] === minimumCharacter ||
        letters[letters.length - 1] === maximumCharacter
    )
}

function hasMinimumInProperPrefix(letters: string): boolean {
    const minimumCharacter: string = findMinimumCharacter(letters)

    for (let index: number = 0; index < letters.length - 1; index++) {
        if (letters[index] === minimumCharacter) {
            return true
        }
    }

    return false
}

function hasMaximumInProperSuffix(letters: string): boolean {
    const maximumCharacter: string = findMaximumCharacter(letters)

    for (let index: number = 1; index < letters.length; index++) {
        if (letters[index] === maximumCharacter) {
            return true
        }
    }

    return false
}

function findMinimumCharacter(letters: string): string {
    let minimumCharacter: string = letters[0]

    for (let index: number = 1; index < letters.length; index++) {
        if (letters[index] < minimumCharacter) {
            minimumCharacter = letters[index]
        }
    }

    return minimumCharacter
}

function findMaximumCharacter(letters: string): string {
    let maximumCharacter: string = letters[0]

    for (let index: number = 1; index < letters.length; index++) {
        if (letters[index] > maximumCharacter) {
            maximumCharacter = letters[index]
        }
    }

    return maximumCharacter
}
