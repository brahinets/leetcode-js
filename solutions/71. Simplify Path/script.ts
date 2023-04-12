export {simplifyPath}


const SEPARATOR: string = "/";
const ROOT: string = "/";

function simplifyPath(path: string): string {
    path = cleanUp(path);
    path = normalize(path);

    return path;
}


function normalize(path: string): string {
    const segments: string[] = path.split(SEPARATOR);
    const resultSegments: string[] = [];


    for (let i: number = 0; i < segments.length; i++) {
        if (segments[i].length === 0) {
            continue;
        }

        if (segments[i] === ".") {
            // skip;
        } else if (segments[i] === "..") {
            resultSegments.pop();
        } else {
            resultSegments.push(segments[i])
        }
    }

    return ROOT + resultSegments.join(SEPARATOR);
}

function cleanUpTrailingSlashes(path: string): string {
    while (path.length > 1 && path.charAt(path.length - 1) === '/') {
        path = path.substring(0, path.length - 1);
    }

    return path;
}

function cleanUpDuplicatedSlashes(path: string): string {
    while (path.includes("//")) {
        const start: number = path.indexOf("//");
        path = path.substring(0, start) + path.substring(start + 1);
    }

    return path;
}

function cleanUp(path: string): string {
    path = cleanUpTrailingSlashes(path);
    path = cleanUpDuplicatedSlashes(path);

    return path;
}