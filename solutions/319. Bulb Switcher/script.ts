export {bulbSwitch}

function bulbSwitch(n: number): number {
    const bulbs: number[] = new Array<number>(n).fill(0);

    let step: number = 1;
    while (step <= n) {
        for (let j: number = 0; j < bulbs.length; j++) {
            if ((j + 1 % step) === 0) {
                bulbs[j] = (bulbs[j] + 1) % 2;
            }
        }

        step++;
    }

    return bulbs.filter((bulb: number): boolean => bulb === 1).length;
}