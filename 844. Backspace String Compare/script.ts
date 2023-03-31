export {backspaceCompare}

function backspaceCompare(s: string, t: string): boolean {
    return process(s) === process(t);
}

function process(s: string): string {
    let data: string[] = [];

    for (let char of s) {
        if (char === "#") {
            data.pop();
        } else {
            data.push(char);
        }
    }

    return data.join("");
}