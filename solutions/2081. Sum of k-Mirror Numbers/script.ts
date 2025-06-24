export {kMirror}

function kMirror(base: number, targetCount: number): number {
    const digitBuffer: number[] = []
    let leftBound: number = 1
    let foundCount: number = 0
    let totalSum: bigint = 0n

    while (foundCount < targetCount) {
        const rightBound: number = leftBound * 10

        for (let isEven: number = 0; isEven < 2; isEven++) {
            for (let half: number = leftBound; half < rightBound && foundCount < targetCount; half++) {
                let palindrome: bigint = BigInt(half)
                let mirrorPart: number = isEven === 0 ? Math.floor(half / 10) : half

                while (mirrorPart > 0) {
                    palindrome = palindrome * 10n + BigInt(mirrorPart % 10)
                    mirrorPart = Math.floor(mirrorPart / 10)
                }

                if (isPalindromeInBase(palindrome, base, digitBuffer)) {
                    foundCount++
                    totalSum += palindrome
                }
            }
        }

        leftBound = rightBound
    }

    return Number(totalSum)
}

function isPalindromeInBase(num: bigint, base: number, digitBuffer: number[]): boolean {
    let length: number = -1
    let temp: bigint = num

    while (temp > 0n) {
        length++

        digitBuffer[length] = Number(temp % BigInt(base))

        temp /= BigInt(base)
    }

    for (let i: number = 0, j = length; i < j; i++, j--) {
        if (digitBuffer[i] !== digitBuffer[j]) {
            return false
        }
    }

    return true
}
