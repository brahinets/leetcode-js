export { maximumNumberOfFamilies }

const LEFT_RANGE_MASK: number = (1 << 1) | (1 << 2) | (1 << 3) | (1 << 4)
const MIDDLE_RANGE_MASK: number = (1 << 3) | (1 << 4) | (1 << 5) | (1 << 6)
const RIGHT_RANGE_MASK: number = (1 << 5) | (1 << 6) | (1 << 7) | (1 << 8)

function maximumNumberOfFamilies(rowCount: number, reservedSeats: number[][]): number {
    const seatMaskByRow: Map<number, number> = new Map<number, number>()
    for (const reservation of reservedSeats) {
        const rowNumber: number = reservation[0]
        const seatNumber: number = reservation[1]
        if (seatNumber < 2 || seatNumber > 9) {
            continue
        }

        const existingMask: number = seatMaskByRow.get(rowNumber) ?? 0
        seatMaskByRow.set(rowNumber, existingMask | (1 << (seatNumber - 1)))
    }

    let totalFamilyCount: number = (rowCount - seatMaskByRow.size) * 2
    for (const seatMask of seatMaskByRow.values()) {
        totalFamilyCount += countFamiliesInRow(seatMask)
    }

    return totalFamilyCount
}

function countFamiliesInRow(seatMask: number): number {
    const isLeftRangeAvailable: boolean = (seatMask & LEFT_RANGE_MASK) === 0
    const isMiddleRangeAvailable: boolean = (seatMask & MIDDLE_RANGE_MASK) === 0
    const isRightRangeAvailable: boolean = (seatMask & RIGHT_RANGE_MASK) === 0

    if (isLeftRangeAvailable && isRightRangeAvailable) {
        return 2
    }

    if (isLeftRangeAvailable || isMiddleRangeAvailable || isRightRangeAvailable) {
        return 1
    }

    return 0
}
