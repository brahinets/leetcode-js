import {destCity} from '../script'

describe('1436. Destination City', (): void => {

    it('Last city without next destination', (): void => {
        expect(destCity([
            ["London", "New York"],
            ["New York", "Lima"],
            ["Lima", "Sao Paulo"]
        ])).toBe("Sao Paulo")
    })

    it('Last city without next destination again', (): void => {
        expect(destCity([
            ["B", "C"],
            ["D", "B"],
            ["C", "A"]
        ])).toBe("A")
    })

    it('The only city without next destination', (): void => {
        expect(destCity([
            ["A", "Z"]
        ])).toBe("Z")
    })

    it('The only city without next destination', (): void => {
        expect(() => destCity([]))
            .toThrowError('There is no single destination city')
    })
})
