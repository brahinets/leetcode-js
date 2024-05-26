import {checkRecord} from '../script'

describe('552. Student Attendance Record II', (): void => {

    it('Include all days', (): void => {
        expect(checkRecord(1))
            .toBe(3)
    })

    it('Exclude too big absence days', (): void => {
        expect(checkRecord(2))
            .toBe(8)
    })

    it('Exclude consecutive late days. Also load test', (): void => {
        expect(checkRecord(10101))
            .toBe(183236316)
    })

    // TODO #552 Speed me up
    it('Load test', (): void => {
        expect(checkRecord(77777))
            .toBe(199988634)
    })
})
