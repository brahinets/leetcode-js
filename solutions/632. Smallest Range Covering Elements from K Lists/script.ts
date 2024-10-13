export {smallestRange}

function smallestRange(nums: number[][]): number[] {
    const events: [number, number, number][] = collectEvents(nums)

    const listCountMap: Map<number, number> = new Map<number, number>()
    let left: number = 0
    let right: number = 0
    let minRange: number = Infinity
    let minRangeLeft: number = 0
    let minRangeRight: number = 0

    while (right < events.length) {
        const [num, list,]: [number, number, number] = events[right]

        listCountMap.set(list, (listCountMap.get(list) || 0) + 1)

        while (listCountMap.size === nums.length) {
            if (num - events[left][0] < minRange) {
                minRange = num - events[left][0]
                minRangeLeft = events[left][0]
                minRangeRight = num
            }

            listCountMap.set(events[left][1], listCountMap.get(events[left][1])! - 1)
            if (listCountMap.get(events[left][1]) === 0) {
                listCountMap.delete(events[left][1])
            }

            left++
        }

        right++
    }

    return [minRangeLeft, minRangeRight]
}

function collectEvents(nums: number[][]) {
    const events: [number, number, number][] = []
    for (let i = 0; i < nums.length; i++) {
        for (const num of nums[i]) {
            events.push([num, i, i])
        }
    }

    events.sort(([aNum, aList,]: [number, number, number], [bNum, bList,]: [number, number, number]): number => {
        if (aNum === bNum) {
            return aList - bList
        } else {
            return aNum - bNum
        }
    })

    return events
}
