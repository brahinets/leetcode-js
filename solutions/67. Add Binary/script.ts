export {addBinary}

function addBinary(a: string, b: string): string {
    const maxBits: number = Math.max(a.length, b.length)
    let result: string = ""

    let carry: number = 0
    for (let i: number = 1; i <= maxBits; i++) {
        const aBit: number = Number(a[a.length - i] ?? 0)
        const bBit: number = Number(b[b.length - i] ?? 0)
        const sum: number = carry + aBit + bBit

        result = sum % 2 + result

        carry = sum > 1 ? 1 : 0
    }

    if (carry) {
        result = 1 + result
    }

    return result
}
