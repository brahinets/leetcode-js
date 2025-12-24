import {sum} from "../../common/array-utils"

export {average}

function average(salary: number[]): number {
    const min: number = Math.min(...salary)
    const max: number = Math.max(...salary)

    const salariesSum: number = sum(salary)

    return (salariesSum - min - max) / (salary.length - 2)
}
