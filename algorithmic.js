function findSets(arr, i, n) {
    if (n == 0) {
        console.log(arr);
    }

    for (let j = n; j >= i; j--) {
        arr.push(j);
        findSets(arr, j, n - j);
        arr.pop();
    }
}

function printSets(n) {
    let arr = [];
    findSets(arr, 1, n);
}

printSets(4);
