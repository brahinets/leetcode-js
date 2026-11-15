import { calcEquation } from '../script'

describe('399. Evaluate Division', (): void => {
    it('All can be determined', (): void => {
        expect(
            calcEquation(
                [
                    ['a', 'b'],
                    ['b', 'c'],
                    ['bc', 'cd']
                ],
                [1.5, 2.5, 5.0],
                [
                    ['a', 'c'],
                    ['c', 'b'],
                    ['bc', 'cd'],
                    ['cd', 'bc']
                ]
            )
        ).toStrictEqual([3.75, 0.4, 5.0, 0.2])
    })

    it('All can be determined', (): void => {
        expect(
            calcEquation(
                [['a', 'aa']],
                [9.0],
                [
                    ['aa', 'a'],
                    ['aa', 'aa']
                ]
            )
        ).toStrictEqual([0.11111, 1.0])
    })

    it('Multiple cannot be determined', (): void => {
        expect(
            calcEquation(
                [
                    ['a', 'b'],
                    ['b', 'c']
                ],
                [2.0, 3.0],
                [
                    ['a', 'c'],
                    ['b', 'a'],
                    ['a', 'e'],
                    ['a', 'a'],
                    ['x', 'x']
                ]
            )
        ).toStrictEqual([6.0, 0.5, -1.0, 1.0, -1.0])
    })

    it('Some cannot be determined', (): void => {
        expect(
            calcEquation(
                [['a', 'b']],
                [0.5],
                [
                    ['a', 'b'],
                    ['b', 'a'],
                    ['a', 'c'],
                    ['x', 'y']
                ]
            )
        ).toStrictEqual([0.5, 2.0, -1.0, -1.0])
    })
})
