export {minFlips}

function minFlips(a: number, b: number, c: number): number {
    let flipsRequired: number = 0

    const aBinary: string = a.toString(2)
    const bBinary: string = b.toString(2)
    const cBinary: string = c.toString(2)

    const longest: number = Math.max(aBinary.length, bBinary.length, cBinary.length)
    const aBinaryPadded: string = aBinary.padStart(longest, "0")
    const bBinaryPadded: string = bBinary.padStart(longest, "0")
    const cBinaryPadded: string = cBinary.padStart(longest, "0")

    for (let i: number = 0; i < longest; i++) {
        const target: number = Number(cBinaryPadded.charAt(i))

        let bits: number
        if (target === 1) {
            if (aBinaryPadded.charAt(i) === "1" || bBinaryPadded.charAt(i) === "1") {
                bits = 0
            } else {
                bits = 1
            }
        } else {
            if (aBinaryPadded.charAt(i) === "0" && bBinaryPadded.charAt(i) === "0") {
                bits = 0
            } else if (aBinaryPadded.charAt(i) === "1" && bBinaryPadded.charAt(i) === "1") {
                bits = 2
            } else {
                bits = 1
            }
        }

        flipsRequired += bits
    }

    return flipsRequired
}
