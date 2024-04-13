export {checkValidString}

function checkValidString(s: string): boolean {
    let minPossibleOpen: number = 0
    let maxPossibleOpen: number = 0

    for (const ch of s) {
        if (ch === '(') {
            minPossibleOpen++
            maxPossibleOpen++
        } else if (ch === ')') {
            minPossibleOpen = Math.max(minPossibleOpen - 1, 0)
            maxPossibleOpen--
            if (maxPossibleOpen < 0) {
                return false
            }
        } else if (ch === '*') {
            minPossibleOpen = Math.max(minPossibleOpen - 1, 0)
            maxPossibleOpen++
        }
    }

    return minPossibleOpen === 0
}
