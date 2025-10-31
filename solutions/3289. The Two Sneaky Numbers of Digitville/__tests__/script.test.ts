import {getSneakyNumbers} from '../script'

describe('3289. The Two Sneaky Numbers of Digitville', (): void => {
    it('All doubled', (): void => {
        expect(getSneakyNumbers([0, 1, 1, 0]))
            .toEqual([0, 1])
    })

    it('Some doubled', (): void => {
        expect(getSneakyNumbers([0, 3, 2, 1, 3, 2]))
            .toEqual([2, 3])
    })

    it('Few doubled', (): void => {
        expect(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]))
            .toEqual([4, 5])
    })
})
