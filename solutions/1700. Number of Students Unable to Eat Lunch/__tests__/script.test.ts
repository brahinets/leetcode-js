import {countStudents} from '../script'

describe('1700. Number of Students Unable to Eat Lunch', (): void => {

    it('All can eat', (): void => {
        expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1]))
            .toBe(0)
    })

    it('Some will not eat', (): void => {
        expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]))
            .toBe(3)
    })

    it('Nobody will eat', (): void => {
        expect(countStudents([1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0]))
            .toBe(6)
    })
})
