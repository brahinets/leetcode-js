import {scoreOfString} from '../script'

describe('3110. Score of a String', (): void => {

    it('One letter left', (): void => {
        expect(scoreOfString("zaz"))
            .toBe(50)
    })

    it('Multiple letters left', (): void => {
        expect(scoreOfString("hello"))
            .toBe(13)
    })
})
