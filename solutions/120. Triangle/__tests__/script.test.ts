import {minimumTotal} from '../script'

describe('120. Triangle', (): void => {
    it('Complex', (): void => {
        expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
            .toEqual(11)
    })

    it('Simple', (): void => {
        expect(minimumTotal([[-10]]))
            .toEqual(-10)
    })
})
