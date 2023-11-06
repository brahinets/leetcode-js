import {SeatManager} from "../script"

describe('1845. Seat Reservation Manager', (): void => {
    it('Reserve sequential', (): void => {
        let reservedSeat: number
        const seatManager: SeatManager = new SeatManager(5)

        reservedSeat = seatManager.reserve()
        expect(reservedSeat).toBe(1)

        reservedSeat = seatManager.reserve()
        expect(reservedSeat).toBe(2)

        seatManager.unreserve(2)

        reservedSeat = seatManager.reserve()
        expect(reservedSeat).toBe(2)

        reservedSeat = seatManager.reserve()
        expect(reservedSeat).toBe(3)

        reservedSeat = seatManager.reserve()
        expect(reservedSeat).toBe(4)

        reservedSeat = seatManager.reserve()
        expect(reservedSeat).toBe(5)

        seatManager.unreserve(5)
    })
})
