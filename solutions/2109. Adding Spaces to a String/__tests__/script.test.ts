import {addSpaces} from '../script'

describe('2109. Adding Spaces to a String', (): void => {
    it('Before words', (): void => {
        expect(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]))
            .toEqual("Leetcode Helps Me Learn")
    })

    it('Before different', (): void => {
        expect(addSpaces("icodeinpython", [1, 5, 7, 9]))
            .toEqual("i code in py thon")
    })

    it('Before all', (): void => {
        expect(addSpaces("spacing", [0, 1, 2, 3, 4, 5, 6]))
            .toEqual(" s p a c i n g")
    })
})
