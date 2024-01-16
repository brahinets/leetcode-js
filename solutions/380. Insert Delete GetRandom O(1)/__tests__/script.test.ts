import {RandomizedSet} from '../script'

describe('380. Insert Delete GetRandom O(1)', (): void => {

    it('Test', (): void => {
        const randomizedSet: RandomizedSet = new RandomizedSet()

        expect(randomizedSet.insert(1))
            .toBe(true)

        expect(randomizedSet.remove(2))
            .toBe(false)

        expect(randomizedSet.insert(2))
            .toBe(true)

        const random: number = randomizedSet.getRandom();
        expect(random == 1 || random == 2)
            .toBe(true)

        expect(randomizedSet.remove(1))
            .toBe(true)

        expect(randomizedSet.insert(2))
            .toBe(false)

        expect(randomizedSet.getRandom())
            .toBe(2)
    })
})
