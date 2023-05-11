export {maxUncrossedLines}

function maxUncrossedLines(up: number[], bottom: number[]): number {
    return uncrossedLines(up, bottom, 0, 0);
}

function uncrossedLines(up: number[], bottom: number[], start: number, end: number): number {
    if (start === up.length || end === bottom.length) {
        return 0;
    }

    if (up[start] === bottom[end]) {
        return 1 + uncrossedLines(up, bottom, start + 1, end + 1);
    } else {
        return Math.max(uncrossedLines(up, bottom, start + 1, end), uncrossedLines(up, bottom, start, end + 1));
    }
}