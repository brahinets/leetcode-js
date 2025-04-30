import {findNumbers} from '../script'

describe('1295. Find Numbers with Even Number of Digits', (): void => {
    it('Multiple', (): void => {
        expect(findNumbers([12, 345, 2, 6, 7896]))
            .toBe(2)
    })

    it('The only', (): void => {
        expect(findNumbers([555, 901, 482, 1771]))
            .toBe(1)
    })

    it('Neither', (): void => {
        expect(findNumbers([555, 901, 482]))
            .toBe(0)
    })
})
