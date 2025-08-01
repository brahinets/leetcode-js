import {generate} from '../script'

describe('118. Pascal\'s Triangle', (): void => {
    it('Complex', (): void => {
        expect(generate(5))
            .toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
    })

    it('Simple', (): void => {
        expect(generate(1))
            .toEqual([[1]])
    })
})
