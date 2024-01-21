export {dailyTemperatures}

function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array<number>(temperatures.length).fill(0)
    const stack: number[] = []

    for (let i: number = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const day: number = stack.pop()!
            result[day] = i - day
        }

        stack.push(i)
    }

    return result
}
