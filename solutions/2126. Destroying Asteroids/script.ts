export {asteroidsDestroyed}

function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
    asteroids.sort((a: number, b: number): number => a - b)

    let currentMass: number = mass

    for (const asteroid of asteroids) {
        if (currentMass < asteroid) {
            return false
        }

        currentMass += asteroid
    }

    return true
}
