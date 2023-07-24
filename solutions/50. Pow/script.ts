export {myPow}

function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }

    if (Math.abs(x) === 1) {
        return (Math.abs(n) % 2) * x;
    }

    let result: number = 1;
    for (let i: number = 0; i < Math.abs(n); i++) {
        result *= x;
    }

    return n > 0 ? result : (1 / result);
}
