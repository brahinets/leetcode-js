export { maxDistance }

function maxDistance(numbers1: number[], numbers2: number[]): number {
    let left: number = 0
    let right: number = 0
    let maximumDistance: number = 0

    while (left < numbers1.length && right < numbers2.length) {
        if (numbers1[left] <= numbers2[right]) {
            maximumDistance = Math.max(maximumDistance, right - left)
            right++
        } else {
            left++

            if (left > right) {
                right = left
            }
        }
    }

    return maximumDistance
}
