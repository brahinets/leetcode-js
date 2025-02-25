export {minimizeXor}

function minimizeXor(num1: number, num2: number): number {
    let result: number = 0

    const targetSetBitsCount: number = bitCount(num2)
    let setBitsCount: number = 0
    let currentBit: number = 31

    while (setBitsCount < targetSetBitsCount) {
        if (isSet(num1, currentBit) || (targetSetBitsCount - setBitsCount > currentBit)) {
            result = setBit(result, currentBit)
            setBitsCount++
        }

        currentBit--
    }

    return result
}

function bitCount(x: number): number {
    return x.toString(2).split('1').length - 1
}

function isSet(x: number, bit: number): boolean {
    return (x & (1 << bit)) !== 0
}

function setBit(x: number, bit: number): number {
    return x | (1 << bit)
}
