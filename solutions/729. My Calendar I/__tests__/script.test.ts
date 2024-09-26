import {MyCalendar} from '../script'

describe('729. My Calendar I', (): void => {
    it('Test', (): void => {
        const myCalendar: MyCalendar = new MyCalendar()

        let bookOnEmpty: boolean = myCalendar.book(10, 20)
        expect(bookOnEmpty).toBe(true)

        let bookInTheMiddle: boolean = myCalendar.book(15, 25)
        expect(bookInTheMiddle).toBe(false)

        let bookInTheEnd: boolean = myCalendar.book(20, 30)
        expect(bookInTheEnd).toBe(true)
    })
})
