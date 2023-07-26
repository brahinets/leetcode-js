export {minSpeedOnTime}

function minSpeedOnTime(dist: number[], hour: number): number {
    if (dist.length > Math.ceil(hour)) {
        return -1;
    }

    let speed: number = 1;
    while ((sumTime(dist, speed)) > hour) {
        speed++;
    }

    return speed;
}

function sumTime(dist: number[], speed: number): number {
    let time: number = 0;

    for (let i: number = 0; i < dist.length - 1; i++) {
        time += Math.ceil(dist[i] / speed)
    }

    time += (dist[dist.length - 1] / speed)

    return time;
}

