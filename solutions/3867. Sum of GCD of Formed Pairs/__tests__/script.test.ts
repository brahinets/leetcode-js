import { sumOfGcdOfFormedPairs } from '../script'

describe('3867. Sum of GCD of Formed Pairs', (): void => {
  it('handles example 1 with odd length array', (): void => {
    const nums: number[] = [2, 6, 4]
    const result: number = sumOfGcdOfFormedPairs(nums)
    expect(result).toBe(2)
  })

  it('handles example 2 with even length array', (): void => {
    const nums: number[] = [3, 6, 2, 8]
    const result: number = sumOfGcdOfFormedPairs(nums)
    expect(result).toBe(5)
  })

  it('handles single element array', (): void => {
    const nums: number[] = [5]
    const result: number = sumOfGcdOfFormedPairs(nums)
    expect(result).toBe(0)
  })

  it('handles two element array', (): void => {
    const nums: number[] = [10, 20]
    const result: number = sumOfGcdOfFormedPairs(nums)
    expect(result).toBe(10)
  })

  it('handles array with identical elements', (): void => {
    const nums: number[] = [4, 4, 4, 4]
    const result: number = sumOfGcdOfFormedPairs(nums)
    expect(result).toBe(8)
  })

  it('handles array with coprime numbers', (): void => {
    const nums: number[] = [3, 5, 7, 11]
    const result: number = sumOfGcdOfFormedPairs(nums)
    expect(result).toBe(2)
  })

  it('handles array with max value at the end', (): void => {
    const nums: number[] = [1, 2, 3, 100]
    const result: number = sumOfGcdOfFormedPairs(nums)
    expect(result).toBe(2)
  })

  it('handles array with decreasing values', (): void => {
    const nums: number[] = [10, 8, 6, 4, 2]
    const result: number = sumOfGcdOfFormedPairs(nums)
    expect(result).toBe(4)
  })
})
