export {countCollisions}

function countCollisions(directions: string): number {
    let collisions: number = 0

    const cars: string[] = directions.split('')
    while (cars.length > 0 && cars[0] === 'L') {
        cars.shift()
    }

    while (cars.length > 0 && cars[cars.length - 1] === 'R') {
        cars.pop()
    }

    for (let car of cars) {
        if (car !== 'S') {
            collisions++
        }
    }

    return collisions
}
