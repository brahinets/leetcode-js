import { minNumberOfSeconds } from '../script'

describe('3296. Minimum Number of Seconds to Make Mountain Height Zero', (): void => {

    it('distributes work across three workers optimally', (): void => {
        // w0 reduces 1 (2s), w1 reduces 2 (3s), w2 reduces 1 (1s) → max = 3
        expect(minNumberOfSeconds(4, [2, 1, 1])).toBe(3)
    })

    it('handles four workers reducing height of 10', (): void => {
        // w0: x=2 (9s), w1: x=3 (12s), w2: x=3 (12s), w3: x=2 (12s) → max = 12
        expect(minNumberOfSeconds(10, [3, 2, 2, 4])).toBe(12)
    })

    it('uses single worker for all reductions', (): void => {
        // 1*(1+2+3) = 6
        expect(minNumberOfSeconds(3, [1])).toBe(6)
    })

    it('uses minimum worker time when height is 1', (): void => {
        // Each worker can reduce 1, minimum cost is min(workerTimes) = 2
        expect(minNumberOfSeconds(1, [5, 2, 3])).toBe(2)
    })

    it('handles single worker with single height unit', (): void => {
        expect(minNumberOfSeconds(1, [1])).toBe(1)
    })

    it('stops early when accumulated reductions already meet target', (): void => {
        // Three fast workers (w=1) can each reduce 1 unit in 1s → total 3 >= 3
        expect(minNumberOfSeconds(3, [1, 1, 1])).toBe(1)
    })

    it('picks the worker with smaller time when two workers compete', (): void => {
        // mountainHeight=2, workerTimes=[1,10]
        // At t=3: w=1 → x*(x+1)/2<=3 → x=2 (cost=3); total=2>=2 → true
        // At t=2: w=1 → x*(x+1)/2<=2 → x=1 (cost=1); w=10 → 10*1<=2 → x=0; total=1<2 → false
        expect(minNumberOfSeconds(2, [1, 10])).toBe(3)
    })

    it('handles large height with a single slow worker', (): void => {
        // w=1000000, h=5: cost = 10^6 * 5*6/2 = 15_000_000
        expect(minNumberOfSeconds(5, [1000000])).toBe(15_000_000)
    })

    it('many identical fast workers cover large height quickly', (): void => {
        // w=1, h=4, 4 workers → each reduces 1 in 1s → total time = 1
        expect(minNumberOfSeconds(4, [1, 1, 1, 1])).toBe(1)
    })
})
