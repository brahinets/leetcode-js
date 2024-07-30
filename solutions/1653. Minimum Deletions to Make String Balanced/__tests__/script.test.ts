import {minimumDeletions} from '../script'

describe('1653. Minimum Deletions to Make String Balanced', (): void => {
    it('One of the solutions', (): void => {
        expect(minimumDeletions("aababbab"))
            .toEqual(2)
    })

    it('The only solution', (): void => {
        expect(minimumDeletions("bbaaaaabb"))
            .toEqual(2)
    })
})
