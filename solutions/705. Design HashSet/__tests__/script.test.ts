import {MyHashSet} from "../script"

describe('705. Design HashSet', (): void => {

    it('Test', (): void => {
        const set: MyHashSet = new MyHashSet()
        let contains: boolean

        set.add(1)
        set.add(2)

        contains = set.contains(1)
        expect(contains).toBe(true)

        contains = set.contains(3)
        expect(contains).toBe(false)

        set.add(2)

        contains = set.contains(2)
        expect(contains).toBe(true)

        set.remove(2)

        contains = set.contains(2)
        expect(contains).toBe(false)
    })
})
