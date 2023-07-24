export {myPow}

function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        return 1 / myPow(x, Math.abs(n))
    }

    if (n % 2 === 0) {
        return myPow(x * x, n / 2);
    } else {
        return myPow(x * x, (n - 1) / 2) * x;
    }
}
