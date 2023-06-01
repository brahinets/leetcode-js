function addToArrayForm(num: number[], k: number): number[] {
    const nums: number[] = k.toString()
        .split('')
        .map((n: string): number => Number(n));

    let longer: number[] = num.length > nums.length ? num : nums;
    let shorter: number[] = num.length <= nums.length ? num : nums;
    longer = longer.reverse();
    shorter = shorter.reverse();

    let addNext: number = 0;
    const result: number[] = [];
    for (const n in longer) {
        const item: number = addNext + longer[n] + (shorter[n] ?? 0);

        result.push(item % 10);

        addNext = item >= 10 ? 1 : 0;
    }

    if (addNext) {
        result.push(1);
    }

    return result.reverse();
}
