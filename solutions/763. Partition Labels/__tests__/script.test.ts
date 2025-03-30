import {partitionLabels} from '../script'

describe('763. Partition Labels', (): void => {
    it('Possible', (): void => {
        expect(partitionLabels("ababcbacadefegdehijhklij"))
            .toEqual([9, 7, 8])
    })

    it('Impossible', (): void => {
        expect(partitionLabels("eccbbbbdec"))
            .toEqual([10])
    })
})
