export {reverse}

const MAX_INT32: number = 2 ** 31 - 1
const MIN_INT32: number = -1 * 2 ** 31

function reverse(x: number): number {
    const sign: number = x < 0 ? -1 : 1

    const reversedNumber: number = Number(String(Math.abs(x))
        .split('')
        .reverse().join('')) * sign

    if (reversedNumber < MIN_INT32 || reversedNumber > MAX_INT32) {
        return 0
    } else {
        return reversedNumber
    }
}
