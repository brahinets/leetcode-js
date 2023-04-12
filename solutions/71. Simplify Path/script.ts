export {simplifyPath}

const SEPARATOR: string = "/";
const ROOT: string = "/";

function simplifyPath(path: string): string {
    const segments: string[] = path.split(SEPARATOR);
    const resultSegments: string[] = [];

    for (let i: number = 0; i < segments.length; i++) {
        if (segments[i].length === 0 || segments[i] === ".") {
            continue;
        }

        if (segments[i] === "..") {
            resultSegments.pop();
        } else {
            resultSegments.push(segments[i])
        }
    }

    return ROOT + resultSegments.join(SEPARATOR);
}