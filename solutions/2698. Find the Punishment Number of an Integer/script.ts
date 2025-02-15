export {punishmentNumber}

function punishmentNumber(n: number): number {
    let punishmentNum: number = 0

    for (let currentNum: number = 1; currentNum <= n; currentNum++) {
        let squareNum: number = currentNum * currentNum

        if (canPartition(squareNum, currentNum)) {
            punishmentNum += squareNum
        }
    }

    return punishmentNum
}

function canPartition(num: number, target: number): boolean {
    if (target < 0 || num < target) {
        return false
    }

    if (num == target) {
        return true
    }

    return (
        canPartition(Math.floor(num / 10), target - (num % 10)) ||
        canPartition(Math.floor(num / 100), target - (num % 100)) ||
        canPartition(Math.floor(num / 1000), target - (num % 1000))
    )
}
