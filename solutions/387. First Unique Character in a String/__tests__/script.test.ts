import {firstUniqChar} from '../script'

describe('387. First Unique Character in a String', (): void => {
    it('One character is unique', (): void => {
        expect(firstUniqChar("leettccoodde"))
            .toStrictEqual(0)
    })

    it('index of first among multiple unique characters', (): void => {
        expect(firstUniqChar("loveleetcode"))
            .toStrictEqual(2)
    })

    it('No unique characters', (): void => {
        expect(firstUniqChar("aabb"))
            .toStrictEqual(-1)
    })
})
