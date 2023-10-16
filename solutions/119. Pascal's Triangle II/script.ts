import {arrayOf} from "../../common/array-factories";

export {getRow}

function getRow(rowIndex: number): number[] {
    const result: number[][] = []

    for (let row: number = 0; row <= rowIndex; row++) {
        const rowData: number[] = arrayOf(1, row + 1)

        for (let cell: number = 1; cell < rowData.length - 1; cell++) {
            rowData[cell] = result[row - 1][cell - 1] + result[row - 1][cell]
        }

        result.push(rowData)
    }

    return result[rowIndex]
}
