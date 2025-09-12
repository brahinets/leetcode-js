import {doesAliceWin} from '../script'

describe('3227. Vowels Game in a String', (): void => {
    it('Alise win', (): void => {
        expect(doesAliceWin("leetcoder"))
            .toBe(true)
    })

    it('Alise loose', (): void => {
        expect(doesAliceWin("bbcd"))
            .toBe(false)
    })
})
