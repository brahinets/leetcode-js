import {AllOne} from '../script'

describe('432. All O`one Data Structure', (): void => {
    it('Test', (): void => {
        const allOne: AllOne = new AllOne()

        allOne.inc("hello")

        allOne.inc("hello")
        expect(allOne.getMaxKey()).toBe("hello")
        expect(allOne.getMinKey()).toBe("hello")

        allOne.inc("leet")
        expect(allOne.getMaxKey()).toBe("hello")
        expect(allOne.getMinKey()).toBe("leet")

        allOne.dec("leet")
        expect(allOne.getMaxKey()).toBe("hello")
        expect(allOne.getMinKey()).toBe("hello")
    })
})
