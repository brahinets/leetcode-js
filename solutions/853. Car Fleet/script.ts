export {carFleet}

function carFleet(target: number, position: number[], speed: number[]): number {
    let participants: Participant[] = collectParticipants(position, speed)
    let fleet: number = 0

    while (participants.some((p: Participant): boolean => p.position < target)) {
        for (let i: number = participants.length - 1; i >= 0; i--) {
            const p: Participant = participants[i]
            const nextCar: Participant | undefined = participants[i + 1]

            p.move(nextCar)
        }

        const notFinished: Participant[] = participants.filter((p: Participant): boolean => p.position < target)
        const finished: Participant[] = participants.filter((p: Participant): boolean => p.position >= target)
        fleet += new Set<number>(finished.map((p: Participant): number => p.position)).size

        participants = notFinished
    }

    return fleet
}

function collectParticipants(position: number[], speed: number[]): Participant[] {
    return position
        .map((p: number, i: number) => new Participant(position[i], i, speed[i]))
        .sort((first: Participant, second: Participant): number =>
            first.position - second.position
        )
}

class Participant {
    position: number
    index: number
    speed: number

    constructor(carPosition: number, index: number, speed: number) {
        this.position = carPosition
        this.index = index
        this.speed = speed
    }

    move(nextCar?: Participant): void {
        if (nextCar) {
            this.position = Math.min(nextCar.position, this.position + this.speed)
            if (nextCar.position === this.position) {
                this.speed = nextCar.speed
            }
        } else {
            this.position += this.speed
        }
    }
}
