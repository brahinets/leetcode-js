import { readBinaryWatch } from '../script'

describe('401. Binary Watch', (): void => {
    it('Returns all times with exactly 1 LED on', (): void => {
        expect(readBinaryWatch(1))
            .toEqual(['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00'])
    })

    it('Returns midnight when no LEDs are on', (): void => {
        expect(readBinaryWatch(0))
            .toEqual(['0:00'])
    })

    it('Returns empty array when turned on count exceeds maximum possible bits', (): void => {
        expect(readBinaryWatch(9))
            .toEqual([])
    })
})
