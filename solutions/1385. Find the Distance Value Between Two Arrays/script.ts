export { findTheDistanceValue }

function findTheDistanceValue(
    firstArray: number[],
    secondArray: number[],
    distance: number
): number {
    let count: number = 0

    for (const first of firstArray) {
        const isFarFromAll: boolean = secondArray.every(
            (second: number): boolean => Math.abs(first - second) > distance
        )

        if (isFarFromAll) {
            count++
        }
    }

    return count
}
