export {bulbSwitch}

function bulbSwitch(n: number): number {
    const bulbs: number[] = new Array<number>(n + 1);

    let step: number = 0;
    while (step <= n) {
        for (let j: number = 0; j < bulbs.length; j++) {
            if (step === 0) {
                bulbs[j] = 0;
            } else if (j % step === 0 && j > 0) {
                bulbs[j] = (bulbs[j] + 1) % 2;
            }
        }

        step++;
    }

    return bulbs.slice(1).filter((bulb: number): boolean => bulb === 1).length;
}