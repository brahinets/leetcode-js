export {buddyStrings}

function buddyStrings(s: string, goal: string): boolean {
    if(s.length !== goal.length) {
        return false
    }

    const nonEqualIndex: number[] = []

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            nonEqualIndex.push(i)
        }
    }

    if (nonEqualIndex.length === 2) {
        return s[nonEqualIndex[0]] === goal[nonEqualIndex[1]] && s[nonEqualIndex[1]] === goal[nonEqualIndex[0]]
    }

    if (nonEqualIndex.length === 0) {
        const counts:Map<string, number> = s.split('')
            .reduce((count: Map<string, number>, char: string) => {
                count.set(char, (count.get(char) || 0) + 1)
                return count
            }, new Map<string, number>())

        for(const c of counts) {
            if(c[1] > 1) {
                return true
            }
        }
    }

    return false
}
