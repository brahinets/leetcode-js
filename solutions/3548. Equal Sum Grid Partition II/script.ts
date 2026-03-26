export { canPartitionGrid }

function canPartitionGrid(grid: number[][]): boolean {
    const rows: number = grid.length
    const columns: number = grid[0].length
    const total: number = computeTotalSum(grid, rows, columns)

    if (checkHorizontalCuts(grid, rows, columns, total)) {
        return true
    }

    return checkVerticalCuts(grid, rows, columns, total)
}

function computeTotalSum(grid: number[][], rows: number, columns: number): number {
    let total: number = 0

    for (let row: number = 0; row < rows; row++) {
        for (let column: number = 0; column < columns; column++) {
            total += grid[row][column]
        }
    }

    return total
}

function checkHorizontalCuts(
    grid: number[][],
    rows: number,
    columns: number,
    total: number,
): boolean {
    const sectionDifferences: number[] = new Array(rows - 1)

    if (checkHorizontalTopSections(grid, rows, columns, total, sectionDifferences)) {
        return true
    }

    return checkHorizontalBottomSections(grid, rows, columns, sectionDifferences)
}

function checkHorizontalTopSections(
    grid: number[][],
    rows: number,
    columns: number,
    total: number,
    sectionDifferences: number[],
): boolean {
    const topValues: Set<number> = new Set<number>()
    let prefixRowSum: number = 0

    for (let rowIndex: number = 0; rowIndex < rows - 1; rowIndex++) {
        for (let column: number = 0; column < columns; column++) {
            topValues.add(grid[rowIndex][column])

            prefixRowSum += grid[rowIndex][column]
        }

        const difference: number = 2 * prefixRowSum - total

        sectionDifferences[rowIndex] = difference
        if (difference === 0) {
            return true
        }

        if (difference > 0 && isDiscountableFromTopSection(grid, columns, rowIndex, difference, topValues)) {
            return true
        }
    }

    return false
}

function isDiscountableFromTopSection(
    grid: number[][],
    columns: number,
    rowIndex: number,
    discountValue: number,
    sectionValues: Set<number>,
): boolean {
    if (columns === 1) {
        return rowIndex >= 1 && (grid[0][0] === discountValue || grid[rowIndex][0] === discountValue)
    }

    if (rowIndex === 0) {
        return grid[0][0] === discountValue || grid[0][columns - 1] === discountValue
    }

    return sectionValues.has(discountValue)
}

function checkHorizontalBottomSections(
    grid: number[][],
    rows: number,
    columns: number,
    sectionDifferences: number[],
): boolean {
    const bottomValues: Set<number> = new Set<number>()

    for (let rowIndex: number = rows - 2; rowIndex >= 0; rowIndex--) {
        for (let column: number = 0; column < columns; column++) {
            bottomValues.add(grid[rowIndex + 1][column])
        }

        const difference: number = sectionDifferences[rowIndex]
        if (difference < 0) {
            const discountValue: number = -difference

            if (isDiscountableFromBottomSection(grid, rows, columns, rowIndex, discountValue, bottomValues)) {
                return true
            }
        }
    }

    return false
}

function isDiscountableFromBottomSection(
    grid: number[][],
    rows: number,
    columns: number,
    rowIndex: number,
    discountValue: number,
    sectionValues: Set<number>,
): boolean {
    if (columns === 1) {
        return rowIndex <= rows - 3 && (grid[rowIndex + 1][0] === discountValue || grid[rows - 1][0] === discountValue)
    }

    if (rowIndex === rows - 2) {
        return grid[rows - 1][0] === discountValue || grid[rows - 1][columns - 1] === discountValue
    }

    return sectionValues.has(discountValue)
}

function checkVerticalCuts(
    grid: number[][],
    rows: number,
    columns: number,
    total: number,
): boolean {
    const sectionDifferences: number[] = new Array(columns - 1)

    if (checkVerticalLeftSections(grid, rows, columns, total, sectionDifferences)) {
        return true
    }

    return checkVerticalRightSections(grid, rows, columns, sectionDifferences)
}

function checkVerticalLeftSections(
    grid: number[][],
    rows: number,
    columns: number,
    total: number,
    sectionDifferences: number[],
): boolean {
    const leftValues: Set<number> = new Set<number>()

    let prefixColumnSum: number = 0

    for (let columnIndex: number = 0; columnIndex < columns - 1; columnIndex++) {
        for (let row: number = 0; row < rows; row++) {
            leftValues.add(grid[row][columnIndex])

            prefixColumnSum += grid[row][columnIndex]
        }

        const difference: number = 2 * prefixColumnSum - total
        sectionDifferences[columnIndex] = difference
        if (difference === 0) {
            return true
        }

        if (difference > 0 && isDiscountableFromLeftSection(grid, rows, columnIndex, difference, leftValues)) {
            return true
        }
    }

    return false
}

function isDiscountableFromLeftSection(
    grid: number[][],
    rows: number,
    columnIndex: number,
    discountValue: number,
    sectionValues: Set<number>,
): boolean {
    if (rows === 1) {
        return columnIndex >= 1 && (grid[0][0] === discountValue || grid[0][columnIndex] === discountValue)
    }

    if (columnIndex === 0) {
        return grid[0][0] === discountValue || grid[rows - 1][0] === discountValue
    }

    return sectionValues.has(discountValue)
}

function checkVerticalRightSections(
    grid: number[][],
    rows: number,
    columns: number,
    sectionDifferences: number[],
): boolean {
    const rightValues: Set<number> = new Set<number>()

    for (let columnIndex: number = columns - 2; columnIndex >= 0; columnIndex--) {
        for (let row: number = 0; row < rows; row++) {
            rightValues.add(grid[row][columnIndex + 1])
        }

        const difference: number = sectionDifferences[columnIndex]

        if (difference < 0) {
            const discountValue: number = -difference

            if (isDiscountableFromRightSection(grid, rows, columns, columnIndex, discountValue, rightValues)) {
                return true
            }
        }
    }

    return false
}

function isDiscountableFromRightSection(
    grid: number[][],
    rows: number,
    columns: number,
    columnIndex: number,
    discountValue: number,
    sectionValues: Set<number>,
): boolean {
    if (rows === 1) {
        return columnIndex <= columns - 3 && (grid[0][columnIndex + 1] === discountValue || grid[0][columns - 1] === discountValue)
    }

    if (columnIndex === columns - 2) {
        return grid[0][columns - 1] === discountValue || grid[rows - 1][columns - 1] === discountValue
    }

    return sectionValues.has(discountValue)
}
