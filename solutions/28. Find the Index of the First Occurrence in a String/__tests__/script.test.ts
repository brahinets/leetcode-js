import {strStr} from '../script'

describe('28. Find the Index of the First Occurrence in a String', (): void => {
    it('Not found', (): void => {
        expect(strStr("leetcode", "leeto"))
            .toBe(-1)
    })

    it('Found at start', (): void => {
        expect(strStr("sadbutsad", "sad"))
            .toBe(0)
    })

    it('Found in the middle', (): void => {
        expect(strStr("sadbutsad", "dbu"))
            .toBe(2)
    })

    it('Found in the end', (): void => {
        expect(strStr("sadbutsadc", "c"))
            .toBe(9)
    })
})
