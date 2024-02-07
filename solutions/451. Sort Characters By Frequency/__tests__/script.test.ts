import {frequencySort} from '../script'

describe('451. Sort Characters By Frequency', (): void => {

    it('Different number of occurrences', (): void => {
        expect(frequencySort("tree"))
            .toBe("eert")
    })

    it('Equal number of occurrence sort alphabetically', (): void => {
        expect(frequencySort("cccaaa"))
            .toBe("aaaccc")
    })

    it('Different case letters', (): void => {
        expect(frequencySort("Aabb"))
            .toBe("bbAa")
    })
})
