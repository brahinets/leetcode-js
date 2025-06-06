import {robotWithString} from '../script'

describe('2434. Using a Robot to Print the Lexicographically Smallest String', (): void => {
    it('One', (): void => {
        expect(robotWithString("zza"))
            .toBe("azz")
    })

    it('Two', (): void => {
        expect(robotWithString("bac"))
            .toBe("abc")
    })

    it('Three', (): void => {
        expect(robotWithString("bdda"))
            .toBe("addb")
    })
})
