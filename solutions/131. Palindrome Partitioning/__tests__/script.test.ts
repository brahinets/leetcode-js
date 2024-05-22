import {partition} from '../script'

describe('131. Palindrome Partitioning', (): void => {

    it('The only partition', (): void => {
        expect(partition("a"))
            .toEqual([["a"]])
    })

    it('Multiple partitions', (): void => {
        expect(partition("aab"))
            .toEqual([["a", "a", "b"], ["aa", "b"]])
    })
})
