export {minAddToMakeValid}

function minAddToMakeValid(s: string): number {
    const stack: string[] = []
    let unbalanced: number = 0

    for (let i: number = 0; i < s.length; i++) {
        const ch: string = s[i]

        if (ch === '(') {
            stack.push(ch)
        } else {
            if (stack.length > 0) {
                stack.pop()
            } else {
                unbalanced++
            }
        }
    }

    return unbalanced + stack.length
}
