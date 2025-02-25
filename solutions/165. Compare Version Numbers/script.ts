export {compareVersion}

function compareVersion(version1: string, version2: string): number {
    const v1: string[] = version1.split(".")
    const v2: string[] = version2.split(".")

    if (v1.length > v2.length) {
        for (let i: number = 0; i < v1.length; i++) {
            const v1num: number = Number(v1[i])
            const v2num: number = Number(v2[i] ?? 0)
            if (v1num > v2num) {
                return 1
            }
            if (v2num > v1num) {
                return -1
            }
        }
    } else {
        for (let j: number = 0; j < v2.length; j++) {
            const v1num: number = Number(v1[j] ?? 0)
            const v2num: number = Number(v2[j])
            if (v1num > v2num) {
                return 1
            }
            if (v2num > v1num) {
                return -1
            }
        }
    }

    return 0
}
