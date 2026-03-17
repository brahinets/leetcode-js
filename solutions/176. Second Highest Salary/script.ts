export {Employee, secondHighestSalary}

interface Employee {
    id: number
    salary: number
}

function secondHighestSalary(employees: Employee[]): number | null {
    const distinctSalaries: number[] = [...new Set(employees.map((e: Employee): number => e.salary))]
    const sortedSalaries: number[] = distinctSalaries.sort((a: number, b: number): number => b - a)

    return sortedSalaries.length < 2 ? null : sortedSalaries[1]
}
