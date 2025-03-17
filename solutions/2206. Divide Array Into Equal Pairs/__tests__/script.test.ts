import {divideArray} from '../script'

describe('2206. Divide Array Into Equal Pairs', (): void => {
    it('Possible', (): void => {
        expect(divideArray([3, 2, 3, 2, 2, 2]))
            .toBe(true)
    })

    it('Impossible', (): void => {
        expect(divideArray([1, 2, 3, 4]))
            .toBe(false)
    })
})
