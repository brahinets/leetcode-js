export {shortestPalindrome}

function shortestPalindrome(s: string): string {
    let reversed: string = s.split("").reverse().join("")

    for (let i: number = 0; i < s.length; i++) {
        if (s.substring(0, s.length - i) === reversed.substring(i)) {
            return reversed.substring(0, i) + s
        }
    }

    return ""
}
