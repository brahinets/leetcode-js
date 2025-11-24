import {prefixesDivBy5} from '../script'

describe('1018. Binary Prefix Divisible By 5', (): void => {
    it('Only the first number is divisible by 5', (): void => {
        expect(prefixesDivBy5([0, 1, 1]))
            .toEqual([true, false, false])
    })

    it('Nothing is divisible by 5', (): void => {
        expect(prefixesDivBy5([1, 1, 1]))
            .toEqual([false, false, false])
    })
})
