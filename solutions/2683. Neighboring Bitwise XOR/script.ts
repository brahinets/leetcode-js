export {doesValidArrayExist}

function doesValidArrayExist(derived: number[]): boolean {
    const original: number[] = [0]
    for (let i: number = 0; i < derived.length; i++) {
        original[i + 1] = derived[i] ^ original[i]
    }
    const checkForZero: boolean = (original[0] == original[original.length - 1])

    original[0] = 1
    for (let i: number = 0; i < derived.length; i++) {
        original[i + 1] = derived[i] ^ original[i]
    }
    const checkForOne: boolean = (original[0] == original[original.length - 1])

    return checkForZero || checkForOne
}
