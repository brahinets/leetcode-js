export {minRemoveToMakeValid}

function minRemoveToMakeValid(s: string): string {
    const chars: string[] = s.split('')
    let open: number = 0

    for (let i: number = 0; i < chars.length; i++) {
        if (chars[i] === '(') {
            open++
        } else if (chars[i] === ')') {
            if (open > 0) {
                open--
            } else {
                delete chars[i]
            }
        }
    }

    for (let i: number = chars.length - 1; i >= 0; i--) {
        if (chars[i] === '(' && open > 0) {
            open--
            delete chars[i]
        }
    }

    return chars.join("")
}
