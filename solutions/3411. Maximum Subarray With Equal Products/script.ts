export { maxLength }

const MAXIMUM_PRODUCT: number = 25200

function maxLength(nums: number[]): number {
    let result: number = 0

    for (let start: number = 0; start < nums.length; start++) {
        let product: number = 1
        let divisor: number = 0
        let multiple: number = 1

        for (let end: number = start; end < nums.length; end++) {
            product *= nums[end]

            if (product > MAXIMUM_PRODUCT) {
                break
            }

            divisor = greatestCommonDivisor(divisor, nums[end])
            multiple = leastCommonMultiple(multiple, nums[end])

            if (product === divisor * multiple) {
                result = Math.max(result, end - start + 1)
            }
        }
    }

    return result
}

function leastCommonMultiple(first: number, second: number): number {
    return (first / greatestCommonDivisor(first, second)) * second
}

function greatestCommonDivisor(first: number, second: number): number {
    return second === 0 ? first : greatestCommonDivisor(second, first % second)
}
