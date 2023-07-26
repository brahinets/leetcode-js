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
    return dist.reduce((totalTime: number, trainDistance: number, trainNumber: number): number => {
        const lastTrain: boolean = trainNumber === dist.length - 1;
        const time: number = trainDistance / speed;

        return totalTime + (lastTrain ? time : Math.ceil(time));
    }, 0);
}

