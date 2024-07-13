import {compareVersion} from '../script'

describe('165. Compare Version Numbers', (): void => {

    it('Equal ignoring zeros', (): void => {
        expect(compareVersion("1.01", "1.001"))
            .toBe(0)
    })

    it('Equal considering missing part as zero', (): void => {
        expect(compareVersion("1.0", "1.0.0"))
            .toBe(0)
    })

    it('Different', (): void => {
        expect(compareVersion("0.1", "1.1"))
            .toBe(-1)
    })
})
