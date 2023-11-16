const mergeSortArr = (arr1, arr2) => {
    if (arr1.length === 0) {
        return arr2
    }
    if (arr2.length === 0) {
        return arr1
    }
    let mergedArr = arr1.concat(arr2)
    console.log(mergedArr);
    // let uniqueNum = [...new Set(mergedArr)]
    // console.log(uniqueNum);

    console.log(mergedArr.sort((a,b) => a-b))

}

mergeSortArr( [2], [2,3,1,6],)