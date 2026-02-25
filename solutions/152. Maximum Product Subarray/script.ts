export {maxProduct}

function maxProduct(nums: number[]): number {
    let maxProduct: number = nums[0]
    let minProduct: number = nums[0]
    let result: number = nums[0]

    for (let i: number = 1; i < nums.length; i++) {
        const current: number = nums[i]
        const tempMax: number = maxProduct

        maxProduct = Math.max(current, current * maxProduct, current * minProduct)
        minProduct = Math.min(current, current * tempMax, current * minProduct)

        result = Math.max(result, maxProduct)
    }

    return result
}
