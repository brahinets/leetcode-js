export {compareVersion}

function compareVersion(version1: string, version2: string): number {
    const v1: number[] = parseVersion(version1)
    const v2: number[] = parseVersion(version2)
    const maxLength: number = Math.max(v1.length, v2.length)

    for (let i: number = 0; i < maxLength; i++) {
        const num1: number = v1[i] ?? 0
        const num2: number = v2[i] ?? 0

        if (num1 > num2) {
            return 1
        }

        if (num1 < num2) {
            return -1
        }
    }

    return 0
}

function parseVersion(version: string): number[] {
    return version.split(".").map(Number)
}
