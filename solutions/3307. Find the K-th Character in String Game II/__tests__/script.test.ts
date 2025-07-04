import {kthCharacter} from '../script'

describe('3307. Find the K-th Character in String Game II', (): void => {
    it('One', (): void => {
        expect(kthCharacter(5, [0, 0, 0]))
            .toEqual("a")
    })

    it('Two', (): void => {
        expect(kthCharacter(10, [0, 1, 0, 1]))
            .toEqual("b")
    })
})
