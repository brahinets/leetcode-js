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
                chars.splice(i, 1)
                i--
            }
        }
    }

    for (let i: number = chars.length - 1; i >= 0; i--) {
        if (chars[i] === '(' && open > 0) {
            open--
            chars.splice(i, 1)
        }
    }

    return chars.join("")
}
