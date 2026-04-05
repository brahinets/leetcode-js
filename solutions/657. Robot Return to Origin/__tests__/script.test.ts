import { judgeCircle } from '../script'

describe('657. Robot Return to Origin', (): void => {
    it('returns true when vertical moves cancel out', (): void => {
        expect(judgeCircle('UD')).toBe(true)
    })

    it('returns false when horizontal moves do not cancel out', (): void => {
        expect(judgeCircle('LL')).toBe(false)
    })

    it('returns true when both horizontal and vertical moves cancel out', (): void => {
        expect(judgeCircle('LRUD')).toBe(true)
    })

    it('returns false when only vertical offset remains', (): void => {
        expect(judgeCircle('LRUU')).toBe(false)
    })
})
