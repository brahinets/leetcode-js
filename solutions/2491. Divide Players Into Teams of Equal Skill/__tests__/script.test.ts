import {dividePlayers} from '../script'

describe('2491. Divide Players Into Teams of Equal Skill', (): void => {
    it('Many players form a team', (): void => {
        expect(dividePlayers([3, 2, 5, 1, 3, 4]))
            .toBe(22)
    })

    it('The two players form a team', (): void => {
        expect(dividePlayers([3, 4]))
            .toBe(12)
    })

    it('Cannot divide', (): void => {
        expect(dividePlayers([1, 1, 2, 3]))
            .toBe(-1)
    })
})
