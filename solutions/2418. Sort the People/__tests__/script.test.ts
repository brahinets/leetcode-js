import {sortPeople} from '../script'

describe('2418. Sort the People', (): void => {

    it('Different names', (): void => {
        expect(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))
            .toEqual(["Mary", "Emma", "John"])
    })

    it('Duplicated names', (): void => {
        expect(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]))
            .toEqual(["Bob", "Alice", "Bob"])
    })
})
