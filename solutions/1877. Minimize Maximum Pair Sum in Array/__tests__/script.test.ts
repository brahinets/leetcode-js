import {minPairSum} from '../script'

describe('1877. Minimize Maximum Pair Sum in Array', (): void => {

    it('Single ways', (): void => {
        expect(minPairSum([3, 5, 2, 3]))
            .toBe(7)
    })

    it('Multiple ways', (): void => {
        expect(minPairSum([3, 5, 4, 2, 4, 6]))
            .toBe(8)
    })
})
