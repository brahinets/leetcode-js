import {maxBuilding} from '../script'

describe('1968. Maximum Building Height', (): void => {

    it('two restrictions creating a reachable peak between them', (): void => {
        const result: number = maxBuilding(5, [[2, 1], [4, 1]])

        expect(result)
            .toBe(2)
    })

    it('no restrictions allows unrestricted growth to last building', (): void => {
        const result: number = maxBuilding(6, [])

        expect(result)
            .toBe(5)
    })

    it('unsorted restrictions with cascading limits across many buildings', (): void => {
        const result: number = maxBuilding(10, [[5, 3], [2, 5], [7, 4], [10, 3]])

        expect(result)
            .toBe(5)
    })

    it('last building restricted still allows taller buildings before it', (): void => {
        const result: number = maxBuilding(10, [[10, 3]])

        expect(result)
            .toBe(6)
    })

    it('minimum n with no restrictions allows single step up', (): void => {
        const result: number = maxBuilding(2, [])

        expect(result)
            .toBe(1)
    })

    it('second building forced to zero blocks initial rise but allows recovery after', (): void => {
        const result: number = maxBuilding(5, [[2, 0]])

        expect(result)
            .toBe(3)
    })

})
