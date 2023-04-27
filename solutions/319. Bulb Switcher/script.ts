export {bulbSwitch}

function bulbSwitch(n: number): number {
    const bulbs: number[] = new Array<number>(n);

    for (let j: number = 0; j < bulbs.length; j++) {
        bulbs[j] = calculateState(j + 1, n);
    }

    return bulbs.filter((bulb: number): boolean => bulb === 1).length;
}

function calculateState(bulb: number, total: number): number {
    let state: boolean = false;
    for (let step: number = 1; step <= total; step++) {
        if (bulb % step === 0) {
            state = !state;
        }
    }

    return state ? 1 : 0;
}