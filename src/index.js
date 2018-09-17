/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let left = new Array();
    let n = 1;
    let LoveTrianglesCount;
    let TripleLoveTrianglesCount = 0;
    for (let i=0; i<preferences.length; i++) {
        left.push(n);
        n++;
    }
    for (let i=0; i<preferences.length; i++){
        if (left[i] === preferences[left[preferences[left[preferences[left[i]-1]-1]-1]-1]-1]){
         TripleLoveTrianglesCount++;
        }

    };
    LoveTrianglesCount = Math.floor(TripleLoveTrianglesCount/3);

    return LoveTrianglesCount;


};
