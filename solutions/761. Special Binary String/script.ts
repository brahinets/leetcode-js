export { makeLargestSpecial }

function makeLargestSpecial(s: string): string {
    const specials: string[] = []
    let count: number = 0
    let start: number = 0

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '1') count++
        else count--

        if (count === 0) {
            const inner: string = makeLargestSpecial(s.slice(start + 1, i))
            specials.push('1' + inner + '0')
            start = i + 1
        }
    }

    specials.sort((a: string, b: string) => b.localeCompare(a))

    return specials.join('')
}
