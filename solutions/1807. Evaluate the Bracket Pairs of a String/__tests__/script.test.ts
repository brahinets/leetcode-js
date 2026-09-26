import {evaluate} from '../script'

describe('1807. Evaluate the Bracket Pairs of a String', (): void => {
    it('every key is known', (): void => {
        expect(evaluate('(name)is(age)yearsold', [['name', 'bob'], ['age', 'two']]))
            .toBe('bobistwoyearsold')
    })

    it('key missing from knowledge becomes a question mark', (): void => {
        expect(evaluate('hi(name)', [['a', 'b']]))
            .toBe('hi?')
    })

    it('same key repeated while bare letters stay untouched', (): void => {
        expect(evaluate('(a)(a)(a)aaa', [['a', 'yes']]))
            .toBe('yesyesyesaaa')
    })

    it('text without any bracket pairs', (): void => {
        expect(evaluate('abcdef', [['a', 'b']]))
            .toBe('abcdef')
    })

    it('empty knowledge leaves every pair unknown', (): void => {
        expect(evaluate('(a)(b)', []))
            .toBe('??')
    })

    it('whole text is a single known bracket pair', (): void => {
        expect(evaluate('(key)', [['key', 'value']]))
            .toBe('value')
    })

    it('mix of known and unknown keys', (): void => {
        expect(evaluate('(a)x(b)y(c)', [['a', 'one'], ['c', 'three']]))
            .toBe('onex?ythree')
    })

    it('knowledge entries unused by the text', (): void => {
        expect(evaluate('(a)', [['a', 'x'], ['b', 'y'], ['c', 'z']]))
            .toBe('x')
    })

    it('adjacent bracket pairs without separators', (): void => {
        expect(evaluate('(first)(second)', [['first', 'ab'], ['second', 'cd']]))
            .toBe('abcd')
    })

    it('single character text without brackets', (): void => {
        expect(evaluate('a', []))
            .toBe('a')
    })

    it('value differing in length from its key', (): void => {
        expect(evaluate('start(k)end', [['k', 'longervalue']]))
            .toBe('startlongervalueend')
    })

    it('large text with many repeated pairs', (): void => {
        const text: string = '(a)b'.repeat(20000)
        const expected: string = 'xb'.repeat(20000)

        expect(evaluate(text, [['a', 'x']]))
            .toBe(expected)
    })
})
