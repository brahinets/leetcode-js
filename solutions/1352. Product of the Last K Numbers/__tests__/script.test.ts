import {ProductOfNumbers} from '../script'

describe('1352. Product of the Last K Numbers', (): void => {
    it('One', (): void => {
        const productOfNumbers: ProductOfNumbers = new ProductOfNumbers()
        productOfNumbers.add(3)
        productOfNumbers.add(0)
        productOfNumbers.add(2)
        productOfNumbers.add(5)
        productOfNumbers.add(4)

        expect(productOfNumbers.getProduct(2)).toEqual(20)
        expect(productOfNumbers.getProduct(3)).toEqual(40)
        expect(productOfNumbers.getProduct(4)).toEqual(0)

        productOfNumbers.add(8)
        expect(productOfNumbers.getProduct(2)).toEqual(32)
    })
})
