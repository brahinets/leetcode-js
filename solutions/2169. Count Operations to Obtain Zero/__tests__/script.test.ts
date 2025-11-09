import {countOperations} from '../script'

describe('2169. Count Operations to Obtain Zero', (): void => {
    it('Several operations needed', (): void => {
        expect(countOperations(2, 3))
            .toBe(3)
    })

    it('Minimum operations needed', (): void => {
        expect(countOperations(10, 10))
            .toBe(1)
    })

    it('No operations needed', (): void => {
        expect(countOperations(0, 1))
            .toBe(0)
    })
})
