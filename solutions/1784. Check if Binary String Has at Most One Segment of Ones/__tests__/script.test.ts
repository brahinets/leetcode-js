import { checkOnesSegment } from '../script'

describe('1784. Check if Binary String Has at Most One Segment of Ones', (): void => {
    it('Two separate segments of ones', (): void => {
        expect(checkOnesSegment('1001'))
            .toBe(false)
    })

    it('Single contiguous segment', (): void => {
        expect(checkOnesSegment('110'))
            .toBe(true)
    })

    it('All ones', (): void => {
        expect(checkOnesSegment('111'))
            .toBe(true)
    })

    it('Single one', (): void => {
        expect(checkOnesSegment('1'))
            .toBe(true)
    })

    it('Ones followed by zeros', (): void => {
        expect(checkOnesSegment('11100'))
            .toBe(true)
    })

    it('Multiple segments', (): void => {
        expect(checkOnesSegment('101'))
            .toBe(false)
    })
})
