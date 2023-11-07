export {eliminateMaximum}

function eliminateMaximum(dist: number[], speed: number[]): number {
    const orcs: Orc[] = collectOrcs(dist, speed)

    let terminated: number = 0
    while (orcs.length > 0 && orcs[0].distance > 0) {
        if (orcs[0].distance > 0) {
            orcs.shift()
            terminated++
        }

        orcs.forEach((orc: Orc) => orc.distance -= orc.speed)
        if (orcs.find((o: Orc): boolean => o.distance <= 0)) {
            break
        }
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
}

function collectOrcs(dist: number[], speed: number[]): Orc[] {
    const orcs: Orc[] = []

    for (let i: number = 0; i < dist.length; i++) {
        orcs.push(new Orc(dist[i], speed[i]))
    }

    orcs.sort((first: Orc, second: Orc) => first.distance - second.distance)

    return orcs
}
