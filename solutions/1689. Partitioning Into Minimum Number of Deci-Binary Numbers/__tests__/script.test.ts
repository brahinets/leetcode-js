import { minPartitions } from '../script'

describe('1689. Partitioning Into Minimum Number of Deci-Binary Numbers', (): void => {
    it('n = "32"', (): void => {
        expect(minPartitions('32'))
            .toBe(3)
    })

    it('n = "82734"', (): void => {
        expect(minPartitions('82734'))
            .toBe(8)
    })

    it('n = "27346209830709182346"', (): void => {
        expect(minPartitions('27346209830709182346'))
            .toBe(9)
    })
})
