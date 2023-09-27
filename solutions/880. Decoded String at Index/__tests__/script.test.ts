import {decodeAtIndex} from '../script'

describe('880. Decoded String at Index', (): void => {

    it('No duplication', (): void => {
        expect(decodeAtIndex("leet", 3))
            .toBe("e")
    })

    it('Singular duplication', (): void => {
        expect(decodeAtIndex("leet2code3", 10))
            .toBe("o")
    })

    it('Multi duplication', (): void => {
        expect(decodeAtIndex("ha22", 5))
            .toBe("h")
    })
})
