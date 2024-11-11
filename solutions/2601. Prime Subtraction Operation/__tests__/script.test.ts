import {primeSubOperation} from '../script'

describe('2601. Prime Subtraction Operation', (): void => {
    it('Need several operations', (): void => {
        expect(primeSubOperation([4, 9, 6, 10]))
            .toBe(true)
    })

    it('Do not need any operations', (): void => {
        expect(primeSubOperation([6, 8, 11, 12]))
            .toBe(true)
    })

    it('No way to perform operations', (): void => {
        expect(primeSubOperation([5, 8, 3]))
            .toBe(false)
    })
})
