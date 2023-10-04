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

    it('Many duplication', (): void => {
        expect(decodeAtIndex("a2345678999999999999999", 1))
            .toBe("a")
    })

    // TODO Optimize memory consumption
    it.skip('Too many duplication', (): void => {
        expect(decodeAtIndex("y959q969u3hb22odq595", 222280369))
            .toBe("y")
    })
})
