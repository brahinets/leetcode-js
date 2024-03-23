import {countNegatives} from '../script'


describe('1351. Count Negative Numbers in a Sorted Matrix', (): void => {
    it('Has negative elements', (): void => {
        expect(countNegatives([
            [4, 3, 2, -1],
            [3, 2, 1, -1],
            [1, 1, -1, -2],
            [-1, -1, -2, -3]
        ])).toStrictEqual(8)
    })

    it('No negative elements', (): void => {
        expect(countNegatives([
            [3, 2],
            [1, 0]
        ])).toStrictEqual(0)
    })
})
