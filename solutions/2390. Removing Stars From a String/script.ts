export {removeStars}


function removeStars(s: string): string {
    const data: string[] = [];

    for (const char of s) {
        if (char === "*") {
            data.pop();
        } else {
            data.push(char);
        }
    }

    return data.join("");
}