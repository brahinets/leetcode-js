export {judgeSquareSum}

function judgeSquareSum(c: number): boolean {
    for (let i = 0; i < c; i++) {
        const secondSquare: number = c - i * i
        const second: number = Math.sqrt(secondSquare)

        if (second === Math.floor(second)) {
            return true
        }
    }

    return false
}
