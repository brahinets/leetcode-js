import {largestOddNumber} from '../script'

describe('1903. Largest Odd Number in String', (): void => {

    it('No odd', (): void => {
        expect(largestOddNumber("4206"))
            .toBe("")
    })

    it('Substring is odd', (): void => {
        expect(largestOddNumber("52"))
            .toBe("5")
    })

    it('Full string is odd', (): void => {
        expect(largestOddNumber("35427"))
            .toBe("35427")
    })
})


