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

    inside(): boolean {
        return this.distance <= 0
    }

    outside(): boolean {
        return this.distance >= 0
    }
}

function collectOrcs(dist: number[], speed: number[]): Orc[] {
    const orcs: Orc[] = []

    for (let i: number = 0; i < dist.length; i++) {
        orcs.push(new Orc(dist[i], speed[i]))
    }

    orcs.sort((first: Orc, second: Orc): number => first.arrivalTime() - second.arrivalTime())

    return orcs
}
