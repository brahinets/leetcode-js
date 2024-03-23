export {productExceptSelf}

function productExceptSelf(nums: number[]): number[] {
    let product: number = 1
    let zeroCount: number = 0
    for (const num of nums) {
        if (num !== 0) {
            product *= num
        } else {
            zeroCount++
        }
    }

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
