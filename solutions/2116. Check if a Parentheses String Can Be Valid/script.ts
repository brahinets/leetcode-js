import {last} from "../../common/array-utils"

export {canBeValid}

function canBeValid(s: string, locked: string): boolean {
    if (s.length % 2 == 1) {
        return false
    }

    let openBrackets: number[] = []
    let unlocked: number[] = []
    for (let i: number = 0; i < s.length; i++) {
        if (locked.charAt(i) == '0') {
            unlocked.push(i)
        } else if (s.charAt(i) == '(') {
            openBrackets.push(i)
        } else if (s.charAt(i) == ')') {
            if (openBrackets.length > 0) {
                openBrackets.pop()
            } else if (unlocked.length > 0) {
                unlocked.pop()
            } else {
                return false
            }
        }
    }

    while (openBrackets.length > 0 && unlocked.length > 0 && last(openBrackets)! < last(unlocked)!) {
        openBrackets.pop()
        unlocked.pop()
    }

    return openBrackets.length <= 0
}
