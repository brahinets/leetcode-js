export {checkPowersOfThree}

function checkPowersOfThree(n: number): boolean {
    while (n > 1) {
        if (n % 3 === 2) {
            return false
        }

        n = Math.floor(n / 3)
    }

    return n === 1
}
