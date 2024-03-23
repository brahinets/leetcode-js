export {isPalindrome}

function isPalindrome(s: string): boolean {
    for (let i: number = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false
        }
    }

    return true
}
