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
})
