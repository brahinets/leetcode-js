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

    it('Division should trunk floating part', (): void => {
        expect(evalRPN(["13", "5", "/"]))
            .toBe(2)
    })

    it('Complex', (): void => {
        expect(evalRPN(["2", "1", "+", "3", "*"]))
            .toBe(9)
    })

    it('Very Complex', (): void => {
        expect(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
            .toBe(22)
    })
})
