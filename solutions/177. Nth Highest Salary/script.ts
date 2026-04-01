export {Employee, getNthHighestSalary}

interface Employee {
    id: number
    salary: number
}

function getNthHighestSalary(employees: Employee[], n: number): number | null {
    const distinctSalaries: number[] = [...new Set<number>(employees.map((employee: Employee): number => employee.salary))]
    const sortedSalaries: number[] = distinctSalaries.sort((a: number, b: number): number => b - a)

    return sortedSalaries.length < n ? null : sortedSalaries[n - 1]
}
