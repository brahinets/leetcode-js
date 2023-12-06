export {minSpeedOnTime}

function minSpeedOnTime(dist: number[], hour: number): number {
    if (dist.length > Math.ceil(hour)) {
        return -1
    }

    let min: number = -1
    let left: number = 1
    let right: number = 1e7
    while (left <= right) {
        const mid: number = Math.round((right + left) / 2)

        if ((sumTime(dist, mid)) <= hour) {
            min = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return min
}

function sumTime(dist: number[], speed: number): number {
    return dist.reduce((totalTime: number, trainDistance: number, trainNumber: number): number => {
        const lastTrain: boolean = trainNumber === dist.length - 1
        const time: number = trainDistance / speed

        return totalTime + (lastTrain ? time : Math.ceil(time))
    }, 0)
}

