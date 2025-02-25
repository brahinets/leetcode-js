import {lemonadeChange} from '../script'

describe('860. Lemonade Change', (): void => {
    it('Can provide', (): void => {
        expect(lemonadeChange([5, 5, 5, 10, 20]))
            .toBe(true)
    })

    it('Cannot provide', (): void => {
        expect(lemonadeChange([5, 5, 10, 10, 20]))
            .toBe(false)
    })
})
