export {productExceptSelf}

function productExceptSelf(nums: number[]): number[] {
    const zeroCount: number = nums
        .reduce((count: number, num: number): number => num === 0 ? count + 1 : count, 0)

    const product: number = nums
        .filter((num: number): boolean => num !== 0)
        .reduce((prod: number, num: number): number => prod * num, 1)

    return nums.map((num: number): number => {
        if (zeroCount > 1) {
            return 0
        } else if (zeroCount === 1) {
            if (num === 0) {
                return product
            } else {
                return 0
            }
        } else {
            return product / num
        }
    })
}
