import {solution} from '../script'

describe('278. First Bad Version', (): void => {
    it('Bad version found on odd index', (): void => {
        const bad: Function = solution((v: number):boolean => v === 1)

        expect(bad(1)).toBe(1)
    })

    it('Bad version on even index', (): void => {
        const bad: Function = solution((v: number):boolean => v === 4)

        expect(bad(5)).toBe(4)
    })
})
