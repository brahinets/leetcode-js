import { maxWalls } from '../script'

describe('3661. Maximum Walls Destroyed by Robots', (): void => {
    it('zero walls when wall list is empty', (): void => {
        expect(maxWalls([0], [5], []))
            .toBe(0)
    })

    it('walls within left firing range of single robot are counted', (): void => {
        expect(maxWalls([10], [5], [5, 7]))
            .toBe(2)
    })

    it('walls within right firing range of single robot are counted', (): void => {
        expect(maxWalls([10], [5], [12, 15]))
            .toBe(2)
    })

    it('chooses direction with more walls for single robot', (): void => {
        expect(maxWalls([10], [5], [5, 7, 12]))
            .toBe(2)
    })

    it('stops bullet at adjacent robot and counts walls up to that robot', (): void => {
        expect(maxWalls([0, 10], [20, 20], [5]))
            .toBe(1)
    })

    it('avoids double counting walls when adjacent robots fire toward each other', (): void => {
        expect(maxWalls([5, 10], [3, 4], [2, 7, 8, 13]))
            .toBe(3)
    })

    it('fires all robots right to maximize walls on the far right', (): void => {
        expect(maxWalls([0, 100], [10, 10], [5, 95]))
            .toBe(2)
    })

    it('handles wall at same position as robot', (): void => {
        expect(maxWalls([5], [0], [5]))
            .toBe(1)
    })
})
