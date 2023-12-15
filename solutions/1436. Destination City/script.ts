export {destCity}

function destCity(paths: string[][]): string {
    const start: string[] = paths.map((path: string[]): string => path[0])
    const destination: string[] = paths.map((path: string[]): string => path[1])

    const last: string[] = destination.filter((city: string): boolean => !start.includes(city));

    if (last.length === 1) {
        return last[0]
    } else {
        throw new Error('There is no single destination city')
    }
}
