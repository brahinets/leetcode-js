import {count} from "../../common/array-utils"

export {canConstruct}

function canConstruct(s: string, k: number): boolean {
    if (s.length < k) {
        return false
    }

    const counts: Map<string, number> = count(s.split(''))

    let oddCount: number = 0
    for (const [, charCount] of counts) {
        if (charCount % 2 === 1) {
            oddCount++
        }
    }

    return oddCount <= k
}
