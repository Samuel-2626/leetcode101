// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You're also given three integers sr, sc, and color. You should perform a flood fill on the image starting from pixel
// image[sr][sc]

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel 
// of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same
// color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.



function floodFill(image, sr, sc, color) {

    const original = image[sr][sc]

    function recurse(image, sr, sc) {

        // check boundaries
        if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1 || image[sr][sc] !== original || image[sr][sc] === color) {
            return image
        }

        image[sr][sc] = color
        recurse(image, sr+1, sc)
        recurse(image, sr-1, sc)
        recurse(image, sr, sc+1)
        recurse(image, sr, sc-1)

        return image

    }

    return recurse(image, sr, sc)

}


console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 0));