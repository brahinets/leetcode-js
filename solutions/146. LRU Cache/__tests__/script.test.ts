import {LRUCache} from "../script";

describe('146. LRU Cache', (): void => {
    it('Test cache', (): void => {
        const cache: LRUCache = new LRUCache(2);

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

    it('Set of the same should refresh value', (): void => {
        const cache: LRUCache = new LRUCache(2);

        expect(cache.get(1)).toBe(-1);
        expect(cache.get(2)).toBe(-1);

        cache.put(2, 6);
        expect(cache.get(1)).toBe(-1);
        expect(cache.get(2)).toBe(6);

        cache.put(1, 5);
        cache.put(1, 2);
        expect(cache.get(1)).toBe(2);
        expect(cache.get(2)).toBe(6);

    });

    it('Get should refresh usage log', (): void => {
        const cache: LRUCache = new LRUCache(2);

        cache.put(1, 10);
        expect(cache.get(1)).toBe(10);

        cache.put(2, 20);
        expect(cache.get(1)).toBe(10);

        cache.put(3, 30);
        expect(cache.get(1)).toBe(10);
        expect(cache.get(2)).toBe(-1);
        expect(cache.get(3)).toBe(30);
    });
})
