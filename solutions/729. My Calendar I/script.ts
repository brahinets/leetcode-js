export {MyCalendar}

class MyCalendar {
    private readonly calendar: number[][]

    constructor() {
        this.calendar = []
    }

    book(start: number, end: number): boolean {
        for (let i: number = 0; i < this.calendar.length; i++) {
            if (start < this.calendar[i][1] && end > this.calendar[i][0]) {
                return false
            }
        }

        this.calendar.push([start, end])

        return true
    }
}
