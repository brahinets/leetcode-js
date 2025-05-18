import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {colorTheGrid}

const MOD: number = 10 ** 9 + 7

function colorTheGrid(m: number, n: number): number {
    const colorings: number[][] = generateAllRowColorings(m)
    const transitions: number[][] = buildTransitions(colorings, m)
    let waysEndingWithColoring: number[] = arrayOf(1, colorings.length)

    for (let col: number = 1; col < n; col++) {
        const newWaysEndingWithColoring: number[] = arrayOfZeros(colorings.length)

        for (let i: number = 0; i < colorings.length; i++) {
            for (const j of transitions[i]) {
                newWaysEndingWithColoring[i] = (newWaysEndingWithColoring[i] + waysEndingWithColoring[j]) % MOD
            }
        }

        waysEndingWithColoring = newWaysEndingWithColoring
    }

    return sumMod(waysEndingWithColoring, MOD)
}

function generateAllRowColorings(m: number): number[][] {
    const colorings: number[][] = []
    const colors: number[] = [0, 1, 2]

    function backtrack(row: number[], pos: number): void {
        if (pos === m) {
            colorings.push([...row])

            return
        }

        for (const color of colors) {
            if (pos === 0 || row[pos - 1] !== color) {
                row[pos] = color

                backtrack(row, pos + 1)
            }
        }
    }

    backtrack(arrayOfZeros(m), 0)

    return colorings
}

function areRowsCompatible(a: number[], b: number[], m: number): boolean {
    for (let i: number = 0; i < m; i++) {
        if (a[i] === b[i]) {
            return false
        }
    }

    return true
}

function buildTransitions(colorings: number[][], m: number): number[][] {
    const transitions: number[][] = arrayOf([], colorings.length)

    for (let i: number = 0; i < colorings.length; i++) {
        for (let j: number = 0; j < colorings.length; j++) {
            if (areRowsCompatible(colorings[i], colorings[j], m)) {
                transitions[i].push(j)
            }
        }
    }

    return transitions
}

function sumMod(arr: number[], mod: number): number {
    let sum: number = 0

    for (const val of arr) {
        sum = (sum + val) % mod
    }

    return sum
}
