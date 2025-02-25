import {commonChars} from '../script'

describe('1002. Find Common Characters', (): void => {

    it('Has duplicated entries', (): void => {
        expect(commonChars(["bella", "label", "roller"]))
            .toEqual(["e", "l", "l"])
    })

    it('Unique entries', (): void => {
        expect(commonChars(["col", "lock", "cok"]))
            .toEqual(["c", "o"])
    })
})
