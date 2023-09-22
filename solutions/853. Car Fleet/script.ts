export {carFleet}

function carFleet(target: number, position: number[], speed: number[]): number {
    let participants: Participant[] = collectParticipants(position, speed)
    let fleet: number = 0

    while (participants.some((p: Participant): boolean => p.position < target)) {
        for (let i = participants.length - 1; i >= 0; i--) {
            const p: Participant = participants[i]
            const nextCar: Participant | undefined = participants[i + 1]

            p.position += Math.min(
                p.speed,
                target - p.position,
                nextCar === undefined ? p.speed : (nextCar.position - p.position))
        }

        const notFinished: Participant[] = participants.filter(p => p.position < target)
        if (participants.length !== notFinished.length) {
            fleet++
            participants = notFinished
        }
    }

    return fleet
}

function collectParticipants(position: number[], speed: number[]): Participant[] {
    // todo use map
    const participants: Participant[] = []

    for (let i: number = 0; i < position.length; i++) {
        participants.push(new Participant(position[i], i, speed[i]))
    }

    participants.sort((first: Participant, second: Participant): number =>
        first.position - second.position
    )

    return participants
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
}
