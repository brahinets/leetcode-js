import {exist} from '../script'

describe('79. Word Search', (): void => {

    it('Not exist', (): void => {
        expect(exist([
                ["A", "B", "C", "E"],
                ["S", "F", "C", "S"],
                ["A", "D", "E", "E"]
            ], "ABCB")
        ).toBe(false)
    })

    it('Exist one way', (): void => {
        expect(exist([
                ["A", "B", "C", "E"],
                ["S", "F", "C", "S"],
                ["A", "D", "E", "E"]
            ], "ABCCED")
        ).toBe(true)
    })

    it('Exist multiple ways', (): void => {
        expect(exist([
                ["A", "B", "E", "E"],
                ["S", "F", "C", "S"],
                ["A", "D", "E", "E"]
            ], "SEE")
        ).toBe(true)
    })
})
