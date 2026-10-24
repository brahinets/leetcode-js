import { countDaysTogether } from '../script'

describe('2409. Count Days Spent Together', (): void => {

    it('partially overlapping stays within the same month', (): void => {
        // Arrange
        const arriveAlice: string = '08-15'
        const leaveAlice: string = '08-18'
        const arriveBob: string = '08-16'
        const leaveBob: string = '08-19'

        // Act
        const result: number = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)

        // Assert
        expect(result)
            .toBe(3)
    })

    it('stays in different months without overlap', (): void => {
        // Arrange
        const arriveAlice: string = '10-01'
        const leaveAlice: string = '10-31'
        const arriveBob: string = '11-01'
        const leaveBob: string = '12-31'

        // Act
        const result: number = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)

        // Assert
        expect(result)
            .toBe(0)
    })

    it('one stay fully contains the other', (): void => {
        // Arrange
        const arriveAlice: string = '01-01'
        const leaveAlice: string = '12-31'
        const arriveBob: string = '03-10'
        const leaveBob: string = '04-05'

        // Act
        const result: number = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)

        // Assert
        expect(result)
            .toBe(27)
    })

    it('stays touch on a single shared day', (): void => {
        // Arrange
        const arriveAlice: string = '02-20'
        const leaveAlice: string = '03-01'
        const arriveBob: string = '03-01'
        const leaveBob: string = '03-15'

        // Act
        const result: number = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)

        // Assert
        expect(result)
            .toBe(1)
    })

    it('overlap spans the end of February in a non-leap year', (): void => {
        // Arrange
        const arriveAlice: string = '02-27'
        const leaveAlice: string = '03-02'
        const arriveBob: string = '02-01'
        const leaveBob: string = '03-31'

        // Act
        const result: number = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)

        // Assert
        expect(result)
            .toBe(4)
    })

    it('identical single day stays', (): void => {
        // Arrange
        const date: string = '07-04'

        // Act
        const result: number = countDaysTogether(date, date, date, date)

        // Assert
        expect(result)
            .toBe(1)
    })

    it('whole year spent together', (): void => {
        // Arrange
        const arrive: string = '01-01'
        const leave: string = '12-31'

        // Act
        const result: number = countDaysTogether(arrive, leave, arrive, leave)

        // Assert
        expect(result)
            .toBe(365)
    })

    it('later traveller leaves before the other arrives', (): void => {
        // Arrange
        const arriveAlice: string = '09-10'
        const leaveAlice: string = '09-20'
        const arriveBob: string = '05-01'
        const leaveBob: string = '09-09'

        // Act
        const result: number = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob)

        // Assert
        expect(result)
            .toBe(0)
    })
})
