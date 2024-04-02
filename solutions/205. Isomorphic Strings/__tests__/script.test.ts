import {isIsomorphic} from '../script'

describe('205. Isomorphic Strings', (): void => {

    it('Isomorphic. Replace multiple', (): void => {
        expect(isIsomorphic("paper", "title"))
            .toBe(true)
    })

    it('Isomorphic. Replace all', (): void => {
        expect(isIsomorphic("egg", "add"))
            .toBe(true)
    })

    it('Not isomorphic', (): void => {
        expect(isIsomorphic("foo", "bar"))
            .toBe(false)
    })
})
