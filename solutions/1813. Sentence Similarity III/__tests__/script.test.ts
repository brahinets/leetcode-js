import {areSentencesSimilar} from '../script'

describe('1813. Sentence Similarity III', (): void => {
    it('Insert nothing', (): void => {
        expect(areSentencesSimilar("My Haley", "My Haley"))
            .toBe(true)
    })

    it('Insert at the beginning', (): void => {
        expect(areSentencesSimilar("My Haley", "Haley"))
            .toBe(true)
    })

    it('Insert in the middle', (): void => {
        expect(areSentencesSimilar("My name is Haley", "My Haley"))
            .toBe(true)
    })

    it('Insert in the end', (): void => {
        expect(areSentencesSimilar("Eating right now", "Eating"))
            .toBe(true)
    })

    it('Not similar', (): void => {
        expect(areSentencesSimilar("of", "A lot of words"))
            .toBe(false)
    })
})
