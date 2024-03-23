export {reverseBits}

function reverseBits(n: number): number {
    const leadingZeros: string = "0".repeat(Math.clz32(n))
    const num: string = leadingZeros + n.toString(2)

    return parseInt(reverse(num), 2)
}

function reverse(s: string): string {
    return s.split("").reverse().join("")
}
