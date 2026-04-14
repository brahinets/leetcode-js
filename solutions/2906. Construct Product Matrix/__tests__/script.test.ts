import { constructProductMatrix } from '../script'

describe('2906. Construct Product Matrix', (): void => {
    it('product matrix for 2x2 grid', (): void => {
        expect(constructProductMatrix([
            [1, 2],
            [3, 4],
        ])).toEqual([
            [24, 12],
            [8, 6],
        ])
    })

    it('product matrix with zeros when modulo reduces values', (): void => {
        expect(constructProductMatrix([
            [12345],
            [2],
            [1],
        ])).toEqual([
            [2],
            [0],
            [0],
        ])
    })

    it('ones matrix when all elements are 1', (): void => {
        expect(constructProductMatrix([
            [1, 1],
            [1, 1],
        ])).toEqual([
            [1, 1],
            [1, 1],
        ])
    })

    it('product matrix for single row', (): void => {
        expect(constructProductMatrix([[1, 2, 3]])).toEqual([[6, 3, 2]])
    })

    it('product matrix for single column', (): void => {
        expect(constructProductMatrix([[1], [2], [3]])).toEqual([[6], [3], [2]])
    })
})
