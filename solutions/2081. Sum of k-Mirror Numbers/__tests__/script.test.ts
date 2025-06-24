import {kMirror} from '../script'

describe('2081. Sum of k-Mirror Numbers', (): void => {
    it('Few', (): void => {
        expect(kMirror(2, 5))
            .toBe(25)
    })

    it('Many', (): void => {
        expect(kMirror(3, 7))
            .toBe(499)
    })

    it('Load test', (): void => {
        expect(kMirror(7, 17))
            .toBe(20379000)
    })

    it('Load test #2', (): void => {
        expect(kMirror(5, 20))
            .toBe(1000828708)
    })
})
