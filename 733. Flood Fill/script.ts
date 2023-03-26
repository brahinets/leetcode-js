export {floodFill}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const startColor: number = image[sr][sc];

    if (startColor === color) {
        return image;
    }

    return floodFills(image, sr, sc, color, startColor);
}

function floodFills(image: number[][], sr: number, sc: number, newColor: number, startColor: number): number[][] {
    let imageCopy: number[][] = JSON.parse(JSON.stringify(image));

    if (startColor === imageCopy[sr][sc]) {
        imageCopy[sr][sc] = newColor;

        if (sr > 0) {
            imageCopy = floodFills(imageCopy, sr - 1, sc, newColor, startColor);
        }

        if (sc > 0) {
            imageCopy = floodFills(imageCopy, sr, sc - 1, newColor, startColor);
        }

        if (sr < imageCopy.length - 1) {
            imageCopy = floodFills(imageCopy, sr + 1, sc, newColor, startColor);
        }

        if (sc < imageCopy[0].length - 1) {
            imageCopy = floodFills(imageCopy, sr, sc + 1, newColor, startColor);
        }
    }

    return imageCopy;
}