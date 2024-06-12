export {sortColors}

const RED: number = 0
const WHITE: number = 1
const BLUE: number = 2

function sortColors(nums: number[]): void {
    const relativity: Map<number, number> = buildRelativity()

    nums.sort((first: number, second: number): number => {
        const firstColorPower: number = relativity.get(first)!
        const secondColorPower: number = relativity.get(second)!

        return firstColorPower - secondColorPower
    })
}

function buildRelativity(): Map<number, number> {
    return new Map<number, number>([
        [RED, 0],
        [WHITE, 1],
        [BLUE, 2],
    ])
}
