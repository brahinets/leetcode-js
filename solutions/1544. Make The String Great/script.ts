export {makeGood}

function makeGood(s: string): string {
    let i: number = 0

    while (i < s.length && s) {
        if (differentCase(s.charAt(i), s.charAt(i + 1))) {
            s = s.slice(0, i) + s.slice(i + 2)
            i = 0
        } else {
            i++
        }
    }

    return s
}

function differentCase(first: string, second: string): boolean {
    return Math.abs(first.charCodeAt(0) - second.charCodeAt(0)) === 32;
}
