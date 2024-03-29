export {eliminateMaximum}

function eliminateMaximum(dist: number[], speed: number[]): number {
    const orcs: Orc[] = collectOrcs(dist, speed)

    let terminated: number = 0
    let hasTime: number = 0

    while (orcs.length > 0 && orcs[0].arrivalTime() > hasTime) {
        orcs.shift()
        terminated++
        hasTime++
    }

    return terminated
}

class Orc {
    distance: number
    readonly speed: number

    constructor(distance: number, speed: number) {
        this.distance = distance
        this.speed = speed
    }

    arrivalTime(): number {
        return Math.ceil(this.distance / this.speed)
    }
}

function collectOrcs(dist: number[], speed: number[]): Orc[] {
    const orcs: Orc[] = []

    for (let i: number = 0; i < dist.length; i++) {
        orcs.push(new Orc(dist[i], speed[i]))
    }

    return orcs.toSorted((first: Orc, second: Orc): number => first.arrivalTime() - second.arrivalTime())
}
