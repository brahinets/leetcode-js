import {replaceNonCoprimes} from '../script'

describe('2197. Replace Non-Coprime Numbers in Array', (): void => {
    it('One', (): void => {
        expect(replaceNonCoprimes([6, 4, 3, 2, 7, 6, 2]))
            .toEqual([12, 7, 6])
    })

    it('Two', (): void => {
        expect(replaceNonCoprimes([2, 2, 1, 1, 3, 3, 3]))
            .toEqual([2, 1, 1, 3])
    })
})
