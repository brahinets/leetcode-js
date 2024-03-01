export {maximumOddBinaryNumber}

function maximumOddBinaryNumber(s: string): string {
    let ones: number = 0
    let zeros: number = 0
    for (const bit of s) {
        if (bit === '1') {
            ones++
        } else if (bit === '0') {
            zeros++
        }
    }

    if (ones > 1) {
        return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1'
    } else if (ones === 1) {
        return '0'.repeat(zeros) + '1'
    } else {
        throw Error("At least one positive bit is required for odd number")
    }
}
