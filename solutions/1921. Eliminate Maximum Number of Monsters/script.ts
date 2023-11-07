export {eliminateMaximum}

function eliminateMaximum(dist: number[], speed: number[]): number {
    const orcs: Orc[] = collectOrcs(dist, speed)

    let terminated: number = 0
    while (orcs.length > 0) {
        orcs.sort((first: Orc, second: Orc) => first.nextPosition() - second.nextPosition())

        if (orcs[0].outside()) {
            orcs.shift()
            terminated++
        }

        orcs.forEach((orc: Orc) => orc.move())
        if (orcs.find((o: Orc): boolean => o.inside())) {
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

    move(): void {
        this.distance = this.nextPosition()
    }

    nextPosition(): number {
        return this.distance - this.speed
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

    return orcs
}
