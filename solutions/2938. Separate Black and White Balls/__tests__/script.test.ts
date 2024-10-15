import {minimumSteps} from '../script'

describe('2938. Separate Black and White Balls', (): void => {
    it('No swaps needed', (): void => {
        expect(minimumSteps("0111"))
            .toBe(0)
    })

    it('The only swap', (): void => {
        expect(minimumSteps("101"))
            .toBe(1)
    })

    it('Multiple swaps', (): void => {
        expect(minimumSteps("100"))
            .toBe(2)
    })
})
