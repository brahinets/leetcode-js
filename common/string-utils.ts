export {isPalindrome}

function isPalindrome(s: string): boolean {
    const phrase: string = s.toLowerCase()
        .replace(/[^a-z0-9]/gi, '')

    for (let i: number = 0; i < phrase.length / 2; i++) {
        if (phrase[i] !== phrase[phrase.length - 1 - i]) {
            return false
        }
    }

    return true
}
