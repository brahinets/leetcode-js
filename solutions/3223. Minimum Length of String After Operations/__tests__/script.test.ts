import {minimumLength} from '../script'

describe('3223. Minimum Length of String After Operations', (): void => {
    it('Perform multiple operations', (): void => {
        expect(minimumLength("abaacbcbb"))
            .toEqual(5)
    })

    it('Cannot perform any operations', (): void => {
        expect(minimumLength("aa"))
            .toEqual(2)
    })
})
