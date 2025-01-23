import {countServers} from '../script'

describe('1267. Count Servers that Communicate', (): void => {
    it('No servers can communicate with others.', (): void => {
        expect(countServers([
            [1, 0],
            [0, 1]
        ])).toBe(0)
    })

    it('All servers can communicate with at least one other server', (): void => {
        expect(countServers([
            [1, 0],
            [1, 1]
        ])).toBe(3)
    })

    it('Some servers can communicate with at least one other server', (): void => {
        expect(countServers([
            [1, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ])).toBe(4)
    })
})
