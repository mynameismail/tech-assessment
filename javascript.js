function reduceSize(arr) {
    let result = {
        'h': [],
        'd': []
    };
    arr.forEach(ar => {
        let data = [];
        if (result['h'].length == 0) {
            for (key in ar) {
                result['h'].push(key);
                data.push(ar[key]);
            }
        }
        if (data.length == 0) {
            result['h'].forEach(h => {
                data.push(ar[h]);
            });
        }
        result['d'].push(data);
    });

    return JSON.stringify(result);
}

let arrObject = [
    { "username": "ali", "hair_color": "brown", "height": 1.2 },
    { "username": "marc", "hair_color": "blue", "height": 1.4 },
    { "username": "joe", "hair_color": "brown", "height": 1.7 },
    { "username": "zehua", "hair_color": "black", "height": 1.8 }
];

console.log(reduceSize(arrObject));
