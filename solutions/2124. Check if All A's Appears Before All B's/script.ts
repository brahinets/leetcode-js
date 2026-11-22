export { checkString }

function checkString(s: string): boolean {
    const SEEN_B: string = 'b'

    for (let index: number = 1; index < s.length; index++) {
        if (s[index - 1] === SEEN_B && s[index] !== SEEN_B) {
            return false
        }
    }

    return true
}
