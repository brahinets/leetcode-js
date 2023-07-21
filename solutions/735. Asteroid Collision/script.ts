export {asteroidCollision}

function asteroidCollision(asteroids: number[]): number[] {
    let canExplodeMore: boolean;

    do {
        canExplodeMore = false;

        for (let i: number = 0; i < asteroids.length - 1; i++) {
            if (asteroids[i] > 0 && asteroids[i + 1] < 0) {
                if (Math.abs(asteroids[i]) > Math.abs(asteroids[i + 1])) {
                    asteroids[i + 1] = Number.NaN;
                } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
                    asteroids[i] = Number.NaN;
                } else {
                    asteroids[i] = Number.NaN;
                    asteroids[i + 1] = Number.NaN;
                }
            }
        }

        canExplodeMore ||= asteroids.includes(Number.NaN);
        asteroids = asteroids.filter((a: number): boolean => !Number.isNaN(a))
    } while (canExplodeMore)

    return asteroids.filter((a: number): boolean => !Number.isNaN(a));
}
