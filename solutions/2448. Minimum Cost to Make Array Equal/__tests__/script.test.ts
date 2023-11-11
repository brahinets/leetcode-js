import {minCost} from '../script'

describe('2448. Minimum Cost to Make Array Equal', (): void => {
    it('Some cost, require balancing', (): void => {
        expect(minCost([1, 3, 5, 2], [2, 3, 1, 14]))
            .toBe(8)
    })

    it('Big cost, require balancing', (): void => {
        expect(minCost(
            [735103, 366367, 132236, 133334, 808160, 113001, 49051, 735598, 686615, 665317, 999793, 426087, 587000, 649989, 509946, 743518],
            [724182, 447415, 723725, 902336, 600863, 287644, 13836, 665183, 448859, 917248, 397790, 898215, 790754, 320604, 468575, 825614]
        )).toBe(1907611126748)
    })

    it('Zero cost, data already equal', (): void => {
        expect(minCost([2, 2, 2, 2, 2], [4, 2, 8, 1, 3]))
            .toBe(0)
    })
})
