import {kInversePairs} from '../script'

describe('629. K Inverse Pairs Array', (): void => {

    it('Only one array', (): void => {
        expect(kInversePairs(3, 0))
            .toBe(1)
    })

    it('Multiple arrays', (): void => {
        expect(kInversePairs(3, 1))
            .toBe(2)
    })
})
