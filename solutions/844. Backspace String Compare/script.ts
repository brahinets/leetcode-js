export {backspaceCompare}

function backspaceCompare(first: string, second: string): boolean {
    return process(first) === process(second);
}

function process(s: string): string {
    const data: string[] = [];

    for (const char of s) {
        if (char === "#") {
            data.pop();
        } else {
            data.push(char);
        }
    }

    return data.join("");
}