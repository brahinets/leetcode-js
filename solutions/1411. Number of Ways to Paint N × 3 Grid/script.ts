export {numOfWays}

const MOD: number = 1e9 + 7

function numOfWays(n: number): number {
    let aba: number = 6
    let abc: number = 6

    for (let i: number = 2; i <= n; i++) {
        const newAba: number = (aba * 3 + abc * 2) % MOD
        const newAbc: number = (aba * 2 + abc * 2) % MOD

        aba = newAba
        abc = newAbc
    }

    return (aba + abc) % MOD
}
