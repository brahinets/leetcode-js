export {countHillValley}

function countHillValley(nums: number[]): number {
    let count: number = 0

    for (let i: number = 1; i < nums.length - 1; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }

        const leftType: number = findLeftNeighborType(nums, i)
        const rightType: number = findRightNeighborType(nums, i)
        if (isHillOrValley(leftType, rightType)) {
            count++
        }
    }

    return count
}

function findLeftNeighborType(nums: number[], index: number): number {
    for (let j: number = index - 1; j >= 0; j--) {
        if (nums[j] > nums[index]) {
            return 1
        }

        if (nums[j] < nums[index]) {
            return -1
        }
    }

    return 0
}

function findRightNeighborType(nums: number[], index: number): number {
    for (let j: number = index + 1; j < nums.length; j++) {
        if (nums[j] > nums[index]) {
            return 1
        }

        if (nums[j] < nums[index]) {
            return -1
        }
    }

    return 0
}

function isHillOrValley(leftType: number, rightType: number): boolean {
    return leftType === rightType && leftType !== 0
}
