import {average} from '../script'

describe('1491. Average Salary Excluding the Minimum and Maximum Salary', (): void => {
    it('One left, it is average', (): void => {
        expect(average([1000, 2000, 3000]))
            .toBe(2000)
    })

    it('Multiple left, average from sum', (): void => {
        expect(average([4000, 3000, 1000, 2000]))
            .toBe(2500)
    })
})
