import {evalRPN} from '../script'

describe('150. Evaluate Reverse Polish Notation', (): void => {

    it('Sum', (): void => {
        expect(evalRPN(["4", "13", "+"]))
            .toBe(17)
    })

    it('Subtraction', (): void => {
        expect(evalRPN(["4", "13", "-"]))
            .toBe(-9)
    })

    it('Division', (): void => {
        expect(evalRPN(["4", "2", "/"]))
            .toBe(2)
    })

    it('Multiplication', (): void => {
        expect(evalRPN(["4", "3", "*"]))
            .toBe(12)
    })
})
