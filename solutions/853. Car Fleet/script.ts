export {carFleet}

function carFleet(target: number, position: number[], speed: number[]): number {
    const participants: Participant[] = collectParticipants(position, speed)
    let fleet: number = 0

    let maxTime: number = 0
    for (const participant of participants) {
        const timeToTarget: number = (target - participant.position) / participant.speed

        if (timeToTarget > maxTime) {
            fleet++
            maxTime = timeToTarget
        }
    }

    return fleet
}

function collectParticipants(position: number[], speed: number[]): Participant[] {
    return position
        .map((_: number, i: number) => new Participant(position[i], speed[i]))
        .sort((first: Participant, second: Participant): number =>
            second.position - first.position
        )
}

class Participant {
    position: number
    speed: number

    constructor(position: number, speed: number) {
        this.position = position
        this.speed = speed
    }
}
