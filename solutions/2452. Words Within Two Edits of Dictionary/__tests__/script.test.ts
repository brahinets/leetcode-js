import { twoEditWords } from '../script'

describe('2452. Words Within Two Edits of Dictionary', (): void => {

    it('query matches dictionary word exactly', (): void => {
        expect(twoEditWords(['word'], ['word']))
            .toEqual(['word'])
    })

    it('query within one edit of dictionary word', (): void => {
        expect(twoEditWords(['cord'], ['word']))
            .toEqual(['cord'])
    })

    it('query within two edits of dictionary word', (): void => {
        expect(twoEditWords(['cord'], ['wore']))
            .toEqual(['cord'])
    })

    it('query with three edits is excluded', (): void => {
        expect(twoEditWords(['cxrt'], ['wore']))
            .toEqual([])
    })

    it('multiple queries some matching', (): void => {
        expect(twoEditWords(['word', 'note', 'ants', 'wood'], ['wood', 'joke', 'moat']))
            .toEqual(['word', 'note', 'wood'])
    })

    it('no queries match any dictionary word', (): void => {
        expect(twoEditWords(['yes'], ['not']))
            .toEqual([])
    })

    it('query matches if within two edits of any dictionary word', (): void => {
        expect(twoEditWords(['aaaa'], ['bbbb', 'aabb']))
            .toEqual(['aaaa'])
    })

})
