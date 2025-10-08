import {minDistance} from '../script'

describe('72. Edit Distance', (): void => {
    it('One', (): void => {
        expect(minDistance("horse", "ros"))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(minDistance("intention", "execution"))
            .toBe(5)
    })
})
