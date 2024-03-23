import {arrayOf} from "../../common/array-factories"

export {numSquares}

function numSquares(n: number): number {
    const squares: number [] = arrayOf(n, n + 1)
    squares[0] = 0

    for (let number: number = 1; number <= n; number++) {
        const maxRoot: number = Math.floor(Math.sqrt(number))

        for (let root: number = 1; root <= maxRoot; root++) {
            const numSquares: number = squares[number - root * root] + 1

            squares[number] = Math.min(squares[number], numSquares)
        }
    }

    return squares[n]
}
