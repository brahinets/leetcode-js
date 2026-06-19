import {matrixOfZeros} from '../../common/array-factories'

export {rotateGrid}

function rotateGrid(grid: number[][], k: number): number[][] {
    const rows: number = grid.length
    const cols: number = grid[0].length
    const result: number[][] = matrixOfZeros(rows, cols)
    const layerCount: number = Math.min(rows, cols) / 2

    for (let layer: number = 0; layer < layerCount; layer++) {
        const ring: number[] = extractRing(grid, layer, rows, cols)
        const rotated: number[] = rotateLeft(ring, k)
        placeRing(result, rotated, layer, rows, cols)
    }

    return result
}

function extractRing(grid: number[][], layer: number, rows: number, cols: number): number[] {
    const ring: number[] = []

    for (let column: number = layer; column < cols - layer; column++) {
        ring.push(grid[layer][column])
    }

    for (let row: number = layer + 1; row < rows - layer; row++) {
        ring.push(grid[row][cols - layer - 1])
    }

    for (let column: number = cols - layer - 2; column >= layer; column--) {
        ring.push(grid[rows - layer - 1][column])
    }

    for (let row: number = rows - layer - 2; row > layer; row--) {
        ring.push(grid[row][layer])
    }

    return ring
}

function rotateLeft(ring: number[], k: number): number[] {
    const length: number = ring.length
    const shift: number = k % length

    return [...ring.slice(shift), ...ring.slice(0, shift)]
}

function placeRing(grid: number[][], ring: number[], layer: number, rows: number, cols: number): void {
    let position: number = 0

    for (let column: number = layer; column < cols - layer; column++) {
        grid[layer][column] = ring[position++]
    }

    for (let row: number = layer + 1; row < rows - layer; row++) {
        grid[row][cols - layer - 1] = ring[position++]
    }

    for (let column: number = cols - layer - 2; column >= layer; column--) {
        grid[rows - layer - 1][column] = ring[position++]
    }

    for (let row: number = rows - layer - 2; row > layer; row--) {
        grid[row][layer] = ring[position++]
    }
}
