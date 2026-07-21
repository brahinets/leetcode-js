export { maxActiveSectionsAfterTrade }

function maxActiveSectionsAfterTrade(s: string): number {
    let oneCount: number = 0
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '1') {
            oneCount++
        }
    }

    const augmented: string = '1' + s + '1'
    const n: number = augmented.length

    let blockCount: number = 0
    let previousZeroLength: number = -1
    let maxGain: number = 0

    let i: number = 0
    while (i < n) {
        if (augmented[i] === '1') {
            blockCount++
            while (i < n && augmented[i] === '1') {
                i++
            }
        } else {
            let zeroLength: number = 0
            while (i < n && augmented[i] === '0') {
                zeroLength++
                i++
            }
            if (previousZeroLength !== -1) {
                maxGain = Math.max(maxGain, previousZeroLength + zeroLength)
            }
            previousZeroLength = zeroLength
        }
    }

    if (maxGain === 0) {
        return oneCount
    }

    return oneCount + maxGain
}
