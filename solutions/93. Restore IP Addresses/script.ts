export { restoreIpAddresses }

function restoreIpAddresses(s: string): string[] {
    const result: string[] = []
    const n: number = s.length

    for (let i: number = 1; i <= 3 && i < n; i++) {
        for (let j: number = i + 1; j <= i + 3 && j < n; j++) {
            for (let k: number = j + 1; k <= j + 3 && k < n; k++) {
                const s1: string = s.substring(0, i)
                const s2: string = s.substring(i, j)
                const s3: string = s.substring(j, k)
                const s4: string = s.substring(k)

                if (s4.length <= 3 &&
                    isValidSegment(s1) &&
                    isValidSegment(s2) &&
                    isValidSegment(s3) &&
                    isValidSegment(s4)
                ) {
                    result.push(`${s1}.${s2}.${s3}.${s4}`)
                }
            }
        }
    }

    return result
}

function isValidSegment(segment: string): boolean {
    return !(segment.startsWith('0') && segment.length > 1) && Number(segment) <= 255
}
