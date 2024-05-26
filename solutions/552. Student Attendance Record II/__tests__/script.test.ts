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
})
