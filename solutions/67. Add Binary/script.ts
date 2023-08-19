export {addBinary}

function addBinary(a: string, b: string): string {
    const maxBits: number = Math.max(a.length, b.length)
    const res: number[] = []

    let carry: number = 0
    for (let i: number = 1; i <= maxBits; i++) {
        const aBit: number = Number(a[a.length - i] ?? 0)
        const bBit: number = Number(b[b.length - i] ?? 0)
        const sum: number = carry + aBit + bBit

        res.push(sum % 2)

        carry = sum > 1 ? 1 : 0
    }

    if (carry) {
        res.push(1)
    }

    return res.reverse().join("")
}
