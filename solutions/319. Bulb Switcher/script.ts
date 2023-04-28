export {bulbSwitch}

function bulbSwitch(n: number): number {
    let on: number = 0;
    for (let j: number = 0; j < n; j++) {
        on += calculateState(j + 1);
    }

    return on;
}

function calculateState(bulb: number): number {
    let state: boolean = false;
    for (let step: number = 1; step <= bulb; step++) {
        if (bulb % step === 0) {
            state = !state;
        }
    }

    return state ? 1 : 0;
}