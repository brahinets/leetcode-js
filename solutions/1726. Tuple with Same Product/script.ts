export {tupleSameProduct}

function tupleSameProduct(nums: number[]): number {
    const map: Map<number, number> = new Map<number, number>();
    let count: number = 0

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            const product: number = nums[i] * nums[j]

            count += (map.get(product) || 0) * 8

            map.set(product, (map.get(product) || 0) + 1)
        }
    }

    return count
}
