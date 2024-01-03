import {numberOfBeams} from '../script'

describe('2125. Number of Laser Beams in a Bank', (): void => {

    it('Has laser beams', (): void => {
        expect(numberOfBeams(["011001", "000000", "010100", "001000"]))
            .toBe(8)
    })

    it('No locators in different rows', (): void => {
        expect(numberOfBeams(["000", "111", "000"]))
            .toBe(0)
    })

    it('No locators at all', (): void => {
        expect(numberOfBeams([]))
            .toBe(0)
    })
})
