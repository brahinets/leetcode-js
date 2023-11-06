export {SeatManager}

class SeatManager {
    private readonly seats: number[]

    constructor(n: number) {
        this.seats = new Array(n)
    }

    reserve(): number {
        for (let i: number = 0; i < this.seats.length; i++) {
            if (!this.seats[i]) {
                this.seats[i] = 1
                return i + 1
            }
        }

        return -1
    }

    unreserve(seatNumber: number): void {
        this.seats[seatNumber - 1] = 0
    }
}
