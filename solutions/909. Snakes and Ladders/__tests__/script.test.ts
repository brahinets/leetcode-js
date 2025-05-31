import {snakesAndLadders} from '../script'

describe('909. Snakes and Ladders', (): void => {
    it('Some dice', (): void => {
        expect(snakesAndLadders([
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 35, -1, -1, 13, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 15, -1, -1, -1, -1]
        ])).toEqual(4)
    })


    it('The only', (): void => {
        expect(snakesAndLadders([
            [-1, -1],
            [-1, 3]
        ])).toEqual(1)
    })
})
