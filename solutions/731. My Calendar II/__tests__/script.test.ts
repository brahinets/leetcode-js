import {MyCalendarTwo} from '../script'

describe('731. My Calendar II', (): void => {
    it('Test', (): void => {
        const myCalendarTwo: MyCalendarTwo = new MyCalendarTwo()

        const bookOnEmpty: boolean = myCalendarTwo.book(10, 20)
        expect(bookOnEmpty).toBe(true)

        const bookOnNextEmpty: boolean = myCalendarTwo.book(50, 60)
        expect(bookOnNextEmpty).toBe(true)

        const bookOnDouble: boolean = myCalendarTwo.book(10, 40)
        expect(bookOnDouble).toBe(true)

        const bookOnTriple: boolean = myCalendarTwo.book(5, 15)
        expect(bookOnTriple).toBe(false)

        const bookOnTripleOnTheEdge: boolean = myCalendarTwo.book(5, 10)
        expect(bookOnTripleOnTheEdge).toBe(true)

        const bookMisc: boolean = myCalendarTwo.book(25, 55)
        expect(bookMisc).toBe(true)
    })
})
