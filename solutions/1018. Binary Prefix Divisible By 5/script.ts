export {prefixesDivBy5}

function prefixesDivBy5(nums: number[]): boolean[] {
    const result: boolean[] = []
    let current: number = 0

    for (const num of nums) {
        current = ((current << 1) + num) % 5

        result.push(current === 0)
    }

    return result
}
