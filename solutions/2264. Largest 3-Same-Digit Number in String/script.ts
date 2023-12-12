export {largestGoodInteger}

function largestGoodInteger(num: string): string {
    const nums: number[] = findAllGoodNumbers(num)
        .toSorted((a: number, b: number): number => b - a)

    if (nums.length === 0) {
        return ""
    }

    return nums[0].toString().padStart(3, "0")
}

function findAllGoodNumbers(num: string): number[] {
    const nums: number[] = []

    for (let i: number = 0; i < num.length - 2; i++) {
        const sub: string = num.substring(i, i + 3)

        if (isGoodNumber(sub)) {
            nums.push(parseInt(sub))
        }
    }

    return nums
}

function isGoodNumber(sub: string): boolean {
    if (sub.length !== 3) {
        return false
    }

    const first: number = parseInt(sub[0])
    const second: number = parseInt(sub[1])
    const third: number = parseInt(sub[2])

    return first === second && second === third
}
