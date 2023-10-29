import {poorPigs} from '../script'

describe('458. Poor Pigs', (): void => {
    it('Have one shot', (): void => {
        expect(poorPigs(4, 15, 15))
            .toBe(2)
    })

    it('Have two shots', (): void => {
        expect(poorPigs(4, 15, 30))
            .toBe(2)
    })

    it('Have multiple shots', (): void => {
        expect(poorPigs(8, 15, 40))
            .toBe(2)
    })

    it('Have many buckets', (): void => {
        expect(poorPigs(1000, 15, 60))
            .toBe(5)
    })
})
