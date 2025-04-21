import {reverseWords} from '../script'

describe('557. Reverse Words in a String III', (): void => {
    it('Regular', (): void => {
        expect(reverseWords("Let's take LeetCode contest"))
            .toBe("s'teL ekat edoCteeL tsetnoc")
    })

    it('Upper', (): void => {
        expect(reverseWords("Mr Ding"))
            .toBe("rM gniD")
    })

    it('Lower', (): void => {
        expect(reverseWords("hello"))
            .toBe("olleh")
    })
})
