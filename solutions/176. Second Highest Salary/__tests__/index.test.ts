import {Employee, secondHighestSalary} from '../script'

describe('176. Second Highest Salary', () => {
    it('should return second highest salary when multiple distinct salaries exist', () => {
        const employees: Employee[] = [
            {id: 1, salary: 100},
            {id: 2, salary: 200},
            {id: 3, salary: 300},
        ]
        expect(secondHighestSalary(employees))
            .toBe(200)
    })

    it('should return null when there is only one distinct salary', () => {
        const employees: Employee[] = [
            {id: 1, salary: 100},
            {id: 2, salary: 100},
            {id: 3, salary: 100},
        ]
        expect(secondHighestSalary(employees))
            .toBeNull()
    })

    it('should return null when employee list is empty', () => {
        const employees: Employee[] = []
        expect(secondHighestSalary(employees))
            .toBeNull()
    })

    it('should return null when there is only one employee', () => {
        const employees: Employee[] = [{id: 1, salary: 100}]
        expect(secondHighestSalary(employees))
            .toBeNull()
    })

    it('should handle duplicate salaries and return the second distinct highest', () => {
        const employees: Employee[] = [
            {id: 1, salary: 100},
            {id: 2, salary: 300},
            {id: 3, salary: 300},
            {id: 4, salary: 200},
            {id: 5, salary: 200},
        ]
        expect(secondHighestSalary(employees))
            .toBe(200)
    })

    it('should work with only two distinct salaries', () => {
        const employees: Employee[] = [
            {id: 1, salary: 150},
            {id: 2, salary: 250},
        ]
        expect(secondHighestSalary(employees))
            .toBe(150)
    })

    it('should handle large salary values', () => {
        const employees: Employee[] = [
            {id: 1, salary: 1000000},
            {id: 2, salary: 999999},
            {id: 3, salary: 500000},
        ]
        expect(secondHighestSalary(employees))
            .toBe(999999)
    })
})
