import {findLucky} from '../script'

describe('1394. Find Lucky Integer in an Array', (): void => {
    it('One lucky number', (): void => {
        expect(findLucky([2, 2, 3, 4]))
            .toBe(2)
    })

    it('Multiple lucky. Return biggest', (): void => {
        expect(findLucky([1, 2, 2, 3, 3, 3]))
            .toBe(3)
    })

    it('No locky numbers', (): void => {
        expect(findLucky([2, 2, 2, 3, 3]))
            .toBe(-1)
    })
})
