import {MyHashMap} from "../script"

describe('706. Design HashMap', (): void => {
    it('Test Valid', (): void => {
        const map: MyHashMap = new MyHashMap()

        map.put(1, 1)
        map.put(2, 2)

        expect(map.get(1)).toBe(1)
        expect(map.get(2)).toBe(2)
        expect(map.get(3)).toBe(-1)

        map.put(2, 22)
        expect(map.get(2)).toBe(22)

        map.remove(2)
        expect(map.get(2)).toBe(-1)
    })
})
