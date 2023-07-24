export {myPow}

function myPow(x: number, n: number): number {
    let result: number = 1;

    if(Math.abs(x) === 1) {
        return (n % 2) * x;
    }

    for (let i: number = 0; i < Math.abs(n); i++) {
        result *= x;
    }

    return n > 0 ? result : (1 / result);
}
