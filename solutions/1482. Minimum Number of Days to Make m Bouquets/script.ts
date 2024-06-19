export {minDays}

function minDays(bloomDay: number[], m: number, k: number): number {
    const maxDays: number = Math.max(...bloomDay)

    let left: number = 1
    let right: number = maxDays

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)

        if (canPickBouquets(bloomDay, mid, k) >= m) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    if (left > maxDays) {
        return -1
    }

    return left
}

function canPickBouquets(bloomDay: number[], days: number, k: number): number {
    let bouquetsPicked: number = 0
    let flowersAvailable: number = 0

    for (const day of bloomDay) {
        if (day <= days) {
            flowersAvailable++

            if (flowersAvailable === k) {
                bouquetsPicked++
                flowersAvailable = 0
            }
        } else {
            flowersAvailable = 0
        }
    }

    return bouquetsPicked
}

