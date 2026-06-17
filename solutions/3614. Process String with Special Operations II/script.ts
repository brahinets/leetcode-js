export { processStr }

function processStr(s: string, k: number): string {
    const n: number = s.length
    const lengths: bigint[] = []
    lengths[0] = 0n

    for (let i: number = 0; i < n; i++) {
        const character: string = s[i]

        if (character === '*') {
            lengths[i + 1] = lengths[i] > 0n ? lengths[i] - 1n : 0n
        } else if (character === '#') {
            lengths[i + 1] = lengths[i] * 2n
        } else if (character === '%') {
            lengths[i + 1] = lengths[i]
        } else {
            lengths[i + 1] = lengths[i] + 1n
        }
    }

    const bigK: bigint = BigInt(k)

    if (bigK >= lengths[n]) {
        return '.'
    }

    let position: bigint = bigK

    for (let i: number = n - 1; i >= 0; i--) {
        const character: string = s[i]

        if (character === '#') {
            position = position % lengths[i]
        } else if (character === '%') {
            position = lengths[i] - 1n - position
        } else if (character !== '*') {
            if (position === lengths[i]) {
                return character
            }
        }
    }

    return '.'
}
