export {longestDiverseString}

function longestDiverseString(a: number, b: number, c: number): string {
    let currentA: number = 0
    let currentB: number = 0
    let currentC: number = 0

    let result: string = ""
    const totalIterations = a + b + c
    for (let i: number = 0; i < totalIterations; i++) {
        if ((a >= b && a >= c && currentA !== 2) || (a > 0 && (currentB === 2 || currentC === 2))) {
            result += 'a'
            a--
            currentA++
            currentB = 0
            currentC = 0
        } else if ((b >= a && b >= c && currentB !== 2) || (b > 0 && (currentC === 2 || currentA === 2))) {
            result += 'b'
            b--
            currentB++
            currentA = 0
            currentC = 0
        } else if ((c >= a && c >= b && currentC !== 2) || (c > 0 && (currentA === 2 || currentB === 2))) {
            result += 'c'
            c--
            currentC++
            currentA = 0
            currentB = 0
        } else {
            break
        }
    }

    return result
}
