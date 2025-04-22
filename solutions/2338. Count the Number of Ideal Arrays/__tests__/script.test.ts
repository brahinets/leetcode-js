import {idealArrays} from '../script'

describe('2338. Count the Number of Ideal Arrays', (): void => {
    it('Multiple #1', (): void => {
        expect(idealArrays(2, 5))
            .toBe(10)
    })

    it('Multiple #2', (): void => {
        expect(idealArrays(5, 3))
            .toBe(11)
    })

    it('Load test', (): void => {
        expect(idealArrays(9767, 9557))
            .toBe(1998089)
    })
})
