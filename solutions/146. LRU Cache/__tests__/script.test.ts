import {LRUCache} from "../script";

describe('146. LRU Cache', (): void => {
    const cache: LRUCache = new LRUCache(2);

    it('Test cache', (): void => {
        cache.put(1, 10);
        expect(cache.get(1)).toBe(10);

        cache.put(2, 20);
        expect(cache.get(1)).toBe(10);
        expect(cache.get(2)).toBe(20);

        cache.put(3, 30);
        expect(cache.get(1)).toBe(-1);
        expect(cache.get(2)).toBe(20);
        expect(cache.get(3)).toBe(30);

        cache.put(4, 40);
        expect(cache.get(1)).toBe(-1);
        expect(cache.get(2)).toBe(-1);
        expect(cache.get(3)).toBe(30);
        expect(cache.get(4)).toBe(40);
    });
})
