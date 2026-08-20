import { maxNumberOfFamilies } from '../script'

describe('1386. Cinema Seat Allocation', (): void => {
    it('rows with scattered reservations still fit a family each', (): void => {
        const rowCount: number = 3
        const reservedSeats: number[][] = [
            [1, 2],
            [1, 3],
            [1, 8],
            [2, 6],
            [3, 1],
            [3, 10]
        ]

        const result: number = maxNumberOfFamilies(rowCount, reservedSeats)

        expect(result).toBe(4)
    })

    it('reservations blocking the outer ranges still leave one middle seat', (): void => {
        const rowCount: number = 2
        const reservedSeats: number[][] = [
            [2, 1],
            [1, 8],
            [2, 6]
        ]

        const result: number = maxNumberOfFamilies(rowCount, reservedSeats)

        expect(result).toBe(2)
    })

    it('reservations spanning both outer ranges block every family in a row', (): void => {
        const rowCount: number = 4
        const reservedSeats: number[][] = [
            [4, 3],
            [1, 4],
            [4, 6],
            [1, 7]
        ]

        const result: number = maxNumberOfFamilies(rowCount, reservedSeats)

        expect(result).toBe(4)
    })

    it('fully empty theater seats two families per row', (): void => {
        const rowCount: number = 5
        const reservedSeats: number[][] = []

        const result: number = maxNumberOfFamilies(rowCount, reservedSeats)

        expect(result).toBe(10)
    })

    it('reservations outside the family ranges do not block seating', (): void => {
        const rowCount: number = 1
        const reservedSeats: number[][] = [
            [1, 1],
            [1, 10]
        ]

        const result: number = maxNumberOfFamilies(rowCount, reservedSeats)

        expect(result).toBe(2)
    })

    it('blocking the left range prevents a second family despite free seats remaining', (): void => {
        const rowCount: number = 1
        const reservedSeats: number[][] = [[1, 2]]

        const result: number = maxNumberOfFamilies(rowCount, reservedSeats)

        expect(result).toBe(1)
    })

    it('theater with a single row and no reservations at the upper bound of rows', (): void => {
        const rowCount: number = 1000000000
        const reservedSeats: number[][] = [[1000000000, 5]]

        const result: number = maxNumberOfFamilies(rowCount, reservedSeats)

        expect(result).toBe(rowCount * 2 - 1)
    })
})
