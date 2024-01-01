import {findContentChildren} from '../script'

describe('455. Assign Cookies', (): void => {

    it('Can feed some children', (): void => {
        expect(findContentChildren([1, 2, 3], [1, 1]))
            .toBe(1)
    })

    it('Can feed all children', (): void => {
        expect(findContentChildren([1, 2], [1, 2, 3]))
            .toBe(2)
    })
})

