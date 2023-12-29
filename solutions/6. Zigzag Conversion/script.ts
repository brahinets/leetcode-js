export {convert}

function convert(s: string, numRows: number): string {
    const matrix: string[][] = []
    for (let i: number = 0; i < numRows; i++) {
        const row: string[] = []
        matrix.push(row)
    }

    const chars: string[] = s.split('')
    let toBottom: boolean = true

    while (chars.length > 0) {
        if (toBottom) {
            for (let i: number = 0; i < numRows && chars.length > 0; i++) {
                const char: string = chars.shift() || ''
                matrix[i].push(char)
            }
        } else {
            for (let i: number = numRows - 1; i >= 0 && chars.length > 0; i--) {
                for (let j: number = 1; j < numRows - 1 && chars.length > 0; j++) {
                    if (i + j + 1 === numRows) {
                        const char: string = chars.shift() || ''
                        matrix[i].push(char)
                    } else {
                        matrix[i].push("")
                    }
                }
            }
        }

        toBottom = !toBottom
    }

    return matrix.reduce((str: string, row: string[]) => str + row.join(""), "")
}
