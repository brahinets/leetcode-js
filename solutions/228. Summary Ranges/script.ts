export {summaryRanges}

function summaryRanges(nums: number[]): string[] {
    const ranges: string[] = [];

    let start: number = 0;
    let end: number = 0;
    while (start < nums.length && end < nums.length) {
        if (end + 1 < nums.length && (nums[end] + 1 === nums[end + 1])) {
            end++;
        } else {
            if(start !== end) {
                ranges.push(nums[start] + "->" + nums[end]);
            } else {
                ranges.push(String(nums[start]));
            }

            start = end + 1;
            end = start;
        }
    }

    return ranges;
}
