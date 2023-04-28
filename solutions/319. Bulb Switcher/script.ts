export {bulbSwitch}

function bulbSwitch(n: number): number {
    let on: number = 0;
    for (let j: number = 0; j < n; j++) {
        if (isOn(j + 1)) {
            on++;
        }
    }

    return on;
}

/**
 * Number has odd number of divisors if and only if it is a perfect square, because each divisor less than the
 * square root of the number corresponds to a divisor greater than the square root of the number.
 *
 * @param bulb - bulb index, starting from 1
 * @return end state of bulb
 */
function isOn(bulb: number): boolean {
    return Math.floor(Math.sqrt(bulb)) * Math.floor(Math.sqrt(bulb)) === bulb;
}