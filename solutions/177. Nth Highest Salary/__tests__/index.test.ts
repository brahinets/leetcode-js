import {Employee, getNthHighestSalary} from '../script'

describe('177. Nth Highest Salary', () => {
    it('nth highest salary when enough distinct salaries exist', () => {
        const employees: Employee[] = [
            {id: 1, salary: 100},
            {id: 2, salary: 200},
            {id: 3, salary: 300},
        ]
        expect(getNthHighestSalary(employees, 2))
            .toBe(200)
    })

    it('highest salary when n is 1', () => {
        const employees: Employee[] = [
            {id: 1, salary: 100},
            {id: 2, salary: 200},
            {id: 3, salary: 300},
        ]
        expect(getNthHighestSalary(employees, 1))
            .toBe(300)
    })

    it('null when n exceeds number of distinct salaries', () => {
        const employees: Employee[] = [
            {id: 1, salary: 100},
            {id: 2, salary: 200},
        ]
        expect(getNthHighestSalary(employees, 3))
            .toBeNull()
    })

    it('null when employee list is empty', () => {
        const employees: Employee[] = []
        expect(getNthHighestSalary(employees, 1))
            .toBeNull()
    })

    it('null when there is only one distinct salary and n is 2', () => {
        const employees: Employee[] = [
            {id: 1, salary: 100},
            {id: 2, salary: 100},
            {id: 3, salary: 100},
        ]
        expect(getNthHighestSalary(employees, 2))
            .toBeNull()
    })

    it('nth distinct highest when duplicate salaries exist', () => {
        const employees: Employee[] = [
            {id: 1, salary: 100},
            {id: 2, salary: 300},
            {id: 3, salary: 300},
            {id: 4, salary: 200},
            {id: 5, salary: 200},
        ]
        expect(getNthHighestSalary(employees, 2))
            .toBe(200)
    })

    it('should handle large salary values', () => {
        const employees: Employee[] = [
            {id: 1, salary: 1000000},
            {id: 2, salary: 999999},
            {id: 3, salary: 500000},
        ]
        expect(getNthHighestSalary(employees, 3))
            .toBe(500000)
    })
})
