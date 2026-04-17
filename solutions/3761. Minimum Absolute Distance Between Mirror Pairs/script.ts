export { minimumDistance }

function minimumDistance(numbers: number[]): number {
    const reverseMap: Map<number, number> = new Map<number, number>()
    let minimumResult: number = Infinity

    for (let index: number = 0; index < numbers.length; index++) {
        const value: number = numbers[index]

        if (reverseMap.has(value)) {
            const previousIndex: number = reverseMap.get(value)!
            const distance: number = index - previousIndex
            
            minimumResult = Math.min(minimumResult, distance)
        }

        const reversedValue: number = reverseNumber(value)
        reverseMap.set(reversedValue, index)
    }

    return minimumResult === Infinity ? -1 : minimumResult
}

function reverseNumber(value: number): number {
    let reversed: number = 0
    let remaining: number = value

    while (remaining > 0) {
        reversed = reversed * 10 + (remaining % 10)
        remaining = Math.floor(remaining / 10)
    }

    return reversed
}
