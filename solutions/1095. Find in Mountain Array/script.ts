export {findInMountainArray, MountainArray}

function findInMountainArray(target: number, mountainArr: MountainArray): number {
    const peakIndex: number = findMountainPeak(mountainArr)

    const leftIndex: number = binarySearch(0, peakIndex, target, mountainArr, true)
    if (leftIndex !== -1) {
        return leftIndex
    }

    return binarySearch(peakIndex + 1, mountainArr.length() - 1, target, mountainArr, false)
}

function findMountainPeak(mountainArr: MountainArray) {
    let left: number = 0
    let right: number = mountainArr.length() - 1

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)

        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left
}

function binarySearch(left: number, right: number, target: number, mountainArr: MountainArray, ascending: boolean): number {
    while (left < right) {
        const mid: number = Math.floor((left + right) / 2)
        const midValue: number = mountainArr.get(mid)

        if (midValue === target) {
            return mid
        }

        if (ascending ? midValue < target : midValue > target) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return mountainArr.get(left) === target ? left : -1
}

class MountainArray {
    constructor(private readonly array: number[]) {
        this.array = array
    }

    get(index: number): number {
        return this.array[index]
    }

    length(): number {
        return this.array.length
    }
}
