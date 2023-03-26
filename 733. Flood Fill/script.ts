export {floodFill}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const startColor: number = image[sr][sc];

    if (startColor !== color) {
        floodFills(image, sr, sc, color, startColor);
    }

    return image;
}

function floodFills(image: number[][], sr: number, sc: number, newColor: number, startColor: number): number[][] {
    if (startColor === image[sr][sc]) {
        image[sr][sc] = newColor;

        if (sr > 0) {
            floodFills(image, sr - 1, sc, newColor, startColor);
        }

        if (sc > 0) {
            floodFills(image, sr, sc - 1, newColor, startColor);
        }

        if (sr < image.length - 1) {
            floodFills(image, sr + 1, sc, newColor, startColor);
        }

        if (sc < image[0].length - 1) {
            floodFills(image, sr, sc + 1, newColor, startColor);
        }
    }

    return image;
}