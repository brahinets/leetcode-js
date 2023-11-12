export {average}

function average(salary: number[]): number {
    const min: number = Math.min(...salary)
    const max: number = Math.max(...salary)

    const sum: number = salary.reduce((sum: number, value: number): number => sum + value, 0)

    return (sum - min - max) / (salary.length - 2)
}
