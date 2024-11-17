export {shortestSubarray}

function shortestSubarray(nums: number[], k: number): number {
    const prefixSum: number[] = [0]
    const deque: number[] = []
    let result: number = Infinity

    for (let i: number = 0; i < nums.length; i++) {
        prefixSum.push(prefixSum[i] + nums[i])
    }

    for (let i: number = 0; i < prefixSum.length; i++) {
        while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
            result = Math.min(result, i - deque.shift()!)
        }

        while (deque.length > 0 && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop()
        }

        deque.push(i)
    }

    return result === Infinity ? -1 : result
}
