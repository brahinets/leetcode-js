import {TimeMap} from '../script'

describe('981. Time Based Key-Value Store', (): void => {
    it('Test fallbacks', (): void => {
        const timeMap: TimeMap = new TimeMap()

        timeMap.set("foo", "bar", 1)

        expect(timeMap.get("foo", 1))
            .toBe("bar")
        expect(timeMap.get("foo", 3))
            .toBe("bar")
    })

    it('Test overridden values', (): void => {
        const timeMap: TimeMap = new TimeMap()

        timeMap.set("foo", "bar", 1)
        timeMap.set("foo", "bar2", 4)

        expect(timeMap.get("foo", 4))
            .toBe("bar2")
    })

    it('Test different keys', (): void => {
        const timeMap: TimeMap = new TimeMap()

        timeMap.set("foo", "bar", 1)
        timeMap.set("foo_", "bar_", 1)

        expect(timeMap.get("foo", 1))
            .toBe("bar")
        expect(timeMap.get("foo_", 1))
            .toBe("bar_")
    })

    it('Test non-existing key', (): void => {
        const timeMap: TimeMap = new TimeMap()

        expect(timeMap.get("foo", 1))
            .toBe("")
    })
})
