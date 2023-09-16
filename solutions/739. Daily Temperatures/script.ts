export {dailyTemperatures}

function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array(temperatures.length).fill(0)
    const stack: number[] = []

    for (let i: number = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const day: number = stack.pop() ?? 0
            result[day] = i - day
        }

        stack.push(i)
    }

    return result
}
