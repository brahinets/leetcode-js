import {check} from '../script'

describe('1752. Check if Array Is Sorted and Rotated', (): void => {
    it('Just sorted', (): void => {
        expect(check([1, 2, 3]))
            .toBe(true)
    })

    it('Sorted and rotated', (): void => {
        expect(check([3, 4, 5, 1, 2]))
            .toBe(true)
    })

    it('Not sorted', (): void => {
        expect(check([2, 1, 3, 4]))
            .toBe(false)
    })
})
