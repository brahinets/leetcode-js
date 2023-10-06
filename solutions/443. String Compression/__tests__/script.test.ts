import {compress} from '../script'

describe('443. String Compression', (): void => {
    it('No compression', (): void => {
        expect(compress(["a"]))
            .toBe(1)
    })

    it('Low compression', (): void => {
        expect(compress(["a", "a", "b", "b", "c", "c", "c"]))
            .toBe(6)
    })

    it('Good compression', (): void => {
        expect(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))
            .toBe(4)
    })
})
