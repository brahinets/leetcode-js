export {longestPalindrome}

function isPalindrome(string: string): boolean {
    for (let i: number = 0; i < string.length / 2; i++) {
        if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
            return false
        }
    }

    return true
}

function longestPalindrome(s: string): string {
    let maxPalindrome: string = ""

    for (let i: number = 0; i < s.length && i < s.length - maxPalindrome.length; i++) {
        for (let j: number = i; j < s.length; j++) {
            const checked: string = s.substring(i, j + 1)
            if (isPalindrome(checked) && checked.length > maxPalindrome.length) {
                maxPalindrome = checked
            }
        }
    }

    return maxPalindrome
}
