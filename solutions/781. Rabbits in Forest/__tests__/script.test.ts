import {numRabbits} from '../script'

describe('781. Rabbits in Forest', (): void => {
    it('Few', (): void => {
        expect(numRabbits([1, 1, 2]))
            .toBe(5)
    })

    it('Many', (): void => {
        expect(numRabbits([10, 10, 10]))
            .toBe(11)
    })
})
