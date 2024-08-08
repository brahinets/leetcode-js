export {spiralMatrixIII}

function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    let r: number = rStart
    let c: number = cStart
    let res: number[][] = [[r, c]]
    let step: number = 1

    while (res.length < rows * cols) {
        for (let i: number = 0; i < step; i++) {
            c++
            if (r >= 0 && r < rows && c >= 0 && c < cols) {
                res.push([r, c])
            }
        }

        for (let i: number = 0; i < step; i++) {
            r++
            if (r >= 0 && r < rows && c >= 0 && c < cols) {
                res.push([r, c])
            }
        }
        step++

        for (let i: number = 0; i < step; i++) {
            c--
            if (r >= 0 && r < rows && c >= 0 && c < cols) {
                res.push([r, c])
            }
        }

        for (let i: number = 0; i < step; i++) {
            r--
            if (r >= 0 && r < rows && c >= 0 && c < cols) {
                res.push([r, c])
            }
        }
        step++
    }

    return res
}
