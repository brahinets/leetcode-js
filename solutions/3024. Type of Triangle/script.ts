export {triangleType}

function triangleType(nums: number[]): string {
    const [a, b, c]: number[] = nums.sort((x: number, y: number): number => x - y)

    if (a + b <= c) {
        return "none"
    }

    if (a === b && b === c) {
        return "equilateral"
    }

    if (a === b || b === c) {
        return "isosceles"
    }

    return "scalene"
}
