import {arrayOf} from "../../common/array-utils";

export {wordBreak}


function wordBreak(s: string, wordDict: string[]): boolean {
    if (s.length === 0 || wordDict.includes(s)) {
        return true
    }

    const canBuildByIndex: boolean[] = arrayOf(false, s.length + 1)
    canBuildByIndex[0] = true

    for (let end: number = 1; end <= s.length; end++) {
        for (let start: number = 0; start < end; start++) {
            if (canBuildByIndex[start] && wordDict.includes(s.substring(start, end))) {
                canBuildByIndex[end] = true
                break
            }
        }
    }

    return canBuildByIndex[s.length]
}
