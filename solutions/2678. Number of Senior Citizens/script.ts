export {countSeniors}

const AGE_START: number = 11
const AGE_SIZE: number = 2

function countSeniors(details: string[]): number {
    return details.filter(detail => Number(detail.slice(AGE_START, AGE_START + AGE_SIZE)) > 60).length
}
