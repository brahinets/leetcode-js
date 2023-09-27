import {decodeAtIndex} from '../script'

describe('880. Decoded String at Index', (): void => {

    it('No duplication', (): void => {
        expect(decodeAtIndex("leet", 3))
            .toBe("t")
    })

})
