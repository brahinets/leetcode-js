export {passThePillow}

function passThePillow(n: number, time: number): number {
    const passes: number = Math.floor(time / (n - 1))

    if (passes % 2 === 0) {
        return time % (n - 1) + 1
    } else {
        return n - time % (n - 1)
    }
}
