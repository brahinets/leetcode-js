export {reverseString}

function reverseString(s: string[]): void {
    for (let i: number = 0; i < Math.floor(s.length / 2); i++) {
        const src: string = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = src
    }
}
