import {productQueries} from '../script'

describe('2438. Range Product Queries of Powers', (): void => {
    it('Multiple queries', (): void => {
        expect(productQueries(15, [[0, 1], [2, 2], [0, 3]]))
            .toEqual([2, 4, 64])
    })

    it('The only query', (): void => {
        expect(productQueries(2, [[0, 0]]))
            .toEqual([2])
    })
})
