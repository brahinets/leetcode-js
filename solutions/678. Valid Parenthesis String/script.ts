export {checkValidString}

function checkValidString(s: string): boolean {
    const openedBraces: number[] = []
    const cheats: number[] = []

    for (let i: number = 0; i < s.length; i++) {
        const ch: string = s[i]

        if (ch === '*') {
            cheats.push(i)
        } else {
            if (ch === '(') {
                openedBraces.push(i)
            } else if (ch === ')') {
                if (openedBraces.length > 0) {
                    openedBraces.pop()
                } else if (cheats.length > 0) {
                    cheats.pop()
                } else {
                    return false
                }
            }
        }
    }

    while (openedBraces.length > 0 && cheats.length > 0) {
        if (openedBraces.pop()! > cheats.pop()!) {
            return false
        }
    }

    return openedBraces.length === 0
}
