import { arrayOfZeros } from "../../common/array-factories"

export { maxValue }

function maxValue(nums: number[]): number[] {
    const n: number = nums.length
    const ans: number[] = arrayOfZeros(n)

    const stack: Array<[number, number, number]> = []

    for (let i: number = 0; i < n; i++) {
        let curMax: number = nums[i]
        let curMin: number = nums[i]
        let curLeft: number = i

        while (stack.length > 0 && stack[stack.length - 1][0] > curMin) {
            const [prevMax, prevMin, prevLeft] = stack.pop()!
            curMax = Math.max(curMax, prevMax)
            curMin = Math.min(curMin, prevMin)
            curLeft = prevLeft
        }

        stack.push([curMax, curMin, curLeft])
    }

    let right: number = n - 1
    for (let k: number = stack.length - 1; k >= 0; k--) {
        const [maxVal, , left] = stack[k]
        for (let j: number = left; j <= right; j++) {
            ans[j] = maxVal
        }
        right = left - 1
    }

    return ans
}
