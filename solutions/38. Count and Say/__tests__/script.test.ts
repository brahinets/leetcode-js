import {countAndSay} from '../script'

describe('1. Two Sum', (): void => {
    it('One', (): void => {
        expect(countAndSay(1))
            .toBe("1")
    })

    it('Many', (): void => {
        expect(countAndSay(4))
            .toBe("1211")
    })
})
