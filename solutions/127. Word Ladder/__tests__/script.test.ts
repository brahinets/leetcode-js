import {ladderLength} from '../script'

describe('127. Word Ladder', (): void => {
    it('One shortest transformation sequence', (): void => {
        expect(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
            .toBe(5)
    })

    it('Therefore there is no valid transformation sequence', (): void => {
        expect(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']))
            .toBe(0)
    })
})
