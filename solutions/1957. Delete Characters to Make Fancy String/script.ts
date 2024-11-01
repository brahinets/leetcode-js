export {makeFancyString}

function makeFancyString(s: string): string {
    let res: string = s[0]
    let count: number = 1

    for (let i: number = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++
        } else {
            count = 1
        }

        if (count < 3) {
            res += s[i]
        }
    }

    return res
}
