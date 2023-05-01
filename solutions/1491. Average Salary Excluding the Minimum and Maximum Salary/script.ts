export {average}

function average(salary: number[]): number {
    const min: number = Math.min(...salary);
    const max: number = Math.max(...salary);

    const data: number[] = [...salary];
    data.splice(data.indexOf(min), 1);
    data.splice(data.indexOf(max), 1);

    return data.reduce((sum: number, value: number): number => sum + value, 0) / data.length;
}
