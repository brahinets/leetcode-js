export {floodFill}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const startColor: number = image[sr][sc];

    if (startColor === color) {
        return image;
    }

    return floodFills(image, sr, sc, color, startColor);
}

function floodFills(image: number[][], sr: number, sc: number, newColor: number, startColor: number): number[][] {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) {
        return image;
    }

    let imageCopy: number[][] = JSON.parse(JSON.stringify(image));

    if (startColor === imageCopy[sr][sc]) {
        imageCopy[sr][sc] = newColor;

        imageCopy = floodFills(imageCopy, sr - 1, sc, newColor, startColor);
        imageCopy = floodFills(imageCopy, sr, sc - 1, newColor, startColor);
        imageCopy = floodFills(imageCopy, sr + 1, sc, newColor, startColor);
        imageCopy = floodFills(imageCopy, sr, sc + 1, newColor, startColor);
    }

    return imageCopy;
}