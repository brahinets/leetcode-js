import {answerString} from '../script'

describe('3403. Find the Lexicographically Largest String From the Box I', (): void => {
    it('Multiple splits possible', (): void => {
        expect(answerString("dbca", 2))
            .toBe("dbc")
    })

    it('The only possible split', (): void => {
        expect(answerString("gggg", 4))
            .toBe("g")
    })
})
