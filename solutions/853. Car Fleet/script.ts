export {carFleet}

function carFleet(target: number, position: number[], speed: number[]): number {
    let participants: Participant[] = collectParticipants(position, speed, target)
    let fleet: number = 0

    while (participants.some((p: Participant): boolean => p.position < target)) {
        for (let i: number = participants.length - 1; i >= 0; i--) {
            const p: Participant = participants[i]
            const nextCar: Participant | undefined = participants[i + 1]

            p.move(nextCar)

            if (p.finished() && !p.joined) {
                fleet++
            }
        }

        participants = participants
            .filter((p: Participant): boolean => !p.joined)
            .filter((p: Participant): boolean => !p.finished())
    }

    return fleet
}

function collectParticipants(position: number[], speed: number[], target: number): Participant[] {
    return position
        .map((_: number, i: number) => new Participant(position[i], speed[i], target))
        .toSorted((first: Participant, second: Participant): number =>
            first.position - second.position
        )
}

class Participant {
    position: number
    speed: number
    target: number
    joined: boolean

    constructor(position: number, speed: number, target: number) {
        this.position = position
        this.speed = speed
        this.target = target
        this.joined = false
    }

    move(nextCar: Participant | undefined): void {
        if (nextCar) {
            if (this.position + this.speed >= nextCar.position && nextCar.position <= this.target) {
                this.joined = true
            }

            this.position = Math.min(nextCar.position, this.position + this.speed)
        } else {
            this.position += this.speed
        }
    }

    finished(): boolean {
        return this.position >= this.target
    }
}
