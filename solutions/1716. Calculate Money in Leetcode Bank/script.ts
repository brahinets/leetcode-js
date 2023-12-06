export {totalMoney}

function totalMoney(n: number): number {
    let sum: number = 0
    let start: number = 1

    while (n > 0) {
        for (let i: number = 0; i < 7 && n > 0; i++) {
            sum += start + i
            n--
        }

        start++
    }

    return sum
}
