export { hasAllCodes }

function hasAllCodes(s: string, k: number): boolean {
    const totalCodes: number = Math.pow(2, k)

    if (s.length < k || s.length < totalCodes + k - 1) {
        return false
    }

    const codes: Set<string> = new Set<string>()

    for (let i: number = 0; i <= s.length - k; i++) {
        codes.add(s.substring(i, i + k))

        if (codes.size === totalCodes) {
            return true
        }
    }

    return codes.size === totalCodes
}
