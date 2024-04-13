import {maxDepth} from '../script'

describe('1614. Maximum Nesting Depth of the Parentheses', (): void => {

    it('Complex', (): void => {
        expect(maxDepth("(1+(2*3)+((8)/4))+1"))
            .toBe(3)
    })

    it('Simple', (): void => {
        expect(maxDepth("(1)+((2))+(((3)))"))
            .toBe(3)
    })
})
