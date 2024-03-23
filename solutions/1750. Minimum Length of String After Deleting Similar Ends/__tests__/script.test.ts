import {minimumLength} from '../script'

describe('1750. Minimum Length of String After Deleting Similar Ends', (): void => {

    it('Removed already', (): void => {
        expect(minimumLength(""))
            .toBe(0)
    })

    it('Remove nothing', (): void => {
        expect(minimumLength("ca"))
            .toBe(2)
    })

    it('Remove all', (): void => {
        expect(minimumLength("cabaabac"))
            .toBe(0)
    })

    it('Remove some', (): void => {
        expect(minimumLength("aabccabba"))
            .toBe(3)
    })
})
