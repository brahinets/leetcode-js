export {chalkReplacer}

function chalkReplacer(chalk: number[], k: number): number {
    const steps: number = chalk.reduce((acc, curr) => acc + curr, 0)
    k %= steps

    let student: number = 0
    while (k >= chalk[student]) {
        k -= chalk[student]
        student++
    }

    return student
}
