export { minNumberOfSeconds }

function minNumberOfSeconds(mountainHeight: number, workerTimes: number[]): number {
    const triangular: number = mountainHeight * (mountainHeight + 1) / 2
    let left: number = 0
    let right: number = Math.max(...workerTimes) * triangular

    while (left < right) {
        const mid: number = left + Math.floor((right - left) / 2)

        if (canFinish(mountainHeight, workerTimes, mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}

function canFinish(mountainHeight: number, workerTimes: number[], time: number): boolean {
    let total: number = 0

    for (const w of workerTimes) {
        let lo: number = 0
        let hi: number = mountainHeight

        while (lo < hi) {
            const mid: number = lo + Math.ceil((hi - lo) / 2)
            const halfProduct: number = mid % 2 === 0 ? (mid / 2) * (mid + 1) : mid * ((mid + 1) / 2)
            const cost: number = w * halfProduct

            if (cost <= time) {
                lo = mid
            } else {
                hi = mid - 1
            }
        }

        total += lo
        if (total >= mountainHeight) {
            return true
        }
    }

    return total >= mountainHeight
}
