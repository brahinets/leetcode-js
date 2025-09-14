import {spellchecker} from '../script'

describe('966. Vowel Spellchecker', (): void => {
    it('Multiple', (): void => {
        expect(spellchecker(["KiTe", "kite", "hare", "Hare"], ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"]))
            .toEqual(["kite", "KiTe", "KiTe", "Hare", "hare", "", "", "KiTe", "", "KiTe"])
    })

    it('One', (): void => {
        expect(spellchecker(["yellow"], ["YellOw"]))
            .toEqual(["yellow"])
    })

    // it('Three', (): void => {
    //     expect(spellchecker([3, 3], 6))
    //         .toEqual([0, 1])
    // })
})
