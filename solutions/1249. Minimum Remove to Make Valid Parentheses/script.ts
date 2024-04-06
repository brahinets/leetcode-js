export {minRemoveToMakeValid}

function minRemoveToMakeValid(s: string): string {
    let open: number = 0

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++
        } else if (s[i] === ')') {
            if (open > 0) {
                open--
            } else {
                s = s.slice(0, i) + s.slice(i + 1)
                i--
            }
        }
    }

    for (let i: number = s.length - 1; i >= 0; i--) {
        if (s[i] === '(' && open > 0) {
            open--
            s = s.slice(0, i) + s.slice(i + 1)
        }
    }

    return s
}
