import {kthCharacter} from '../script'

describe('3304. Find the K-th Character in String Game I', (): void => {
    it('One', (): void => {
        expect(kthCharacter(5))
            .toBe("b")
    })

    it('Two', (): void => {
        expect(kthCharacter(10))
            .toBe("c")
    })
})
