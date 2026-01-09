import {findLadders} from '../script'

describe('126. Word Ladder II', (): void => {
    it('Returns all shortest transformation sequences', (): void => {
        expect(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]))
            .toEqual([
                ["hit","hot","dot","dog","cog"],
                ["hit","hot","lot","log","cog"]
            ])
    })

    it('Returns empty array when endWord not in wordList', (): void => {
        expect(findLadders("hit", "cog", ["hot","dot","dog","lot","log"]))
            .toEqual([])
    })
})
