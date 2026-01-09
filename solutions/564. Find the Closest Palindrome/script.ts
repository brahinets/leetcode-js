export {nearestPalindromic}

function nearestPalindromic(n: string): string {
    const i: number = n.length % 2 === 0 ? (n.length / 2 - 1) : (n.length / 2)
    const half: number = Number(n.substring(0, i + 1))
    const candidates: bigint[] = getCandidates(half, n.length)

    let minDiff: bigint = BigInt(Number.MAX_SAFE_INTEGER)
    let result: bigint = BigInt(0)
    const original: bigint = BigInt(n)
    for (let candidate of candidates) {
        const diff: bigint = abs(candidate - original)

        if (diff === BigInt(0)) {
            continue
        }

        if (diff < minDiff) {
            minDiff = diff
            result = candidate
        } else if (diff === minDiff && candidate < result) {
            result = candidate
        }
    }

    return result.toString()
}

function getCandidates(scope: number, length: number): bigint[] {
    return [
        halfToPalindrome(scope, length % 2 === 0),
        halfToPalindrome(scope + 1, length % 2 === 0),
        halfToPalindrome(scope - 1, length % 2 === 0),
        BigInt(10 ** (length - 1) - 1),
        BigInt(10 ** (length) + 1),
    ]
}

function halfToPalindrome(half: number, isEven: boolean): bigint {
    let result: bigint = BigInt(half)

    if (!isEven) {
        half = Math.floor(half / 10)
    }

    while (half > 0) {
        result = result * 10n + BigInt(half % 10)
        half = Math.floor(half / 10)
    }

    return BigInt(result)
}

function abs(x: bigint): bigint {
    return x < BigInt(0) ? -x : x
}
