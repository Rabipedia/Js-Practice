const myReduce = (arr, cb, init) => {
    let acc = init;
    for(let i = 0; i < arr.length; i++){
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;

}

const sum = myReduce([1, 2, 3, 4, 5], (a,b) => a + b, 0);

const data = [1, 2, 3, false, NaN, '', 4, 5];
const res = myReduce(data, (acc, cur) => {
    if(cur){
        acc.push(cur*cur);
    }
    return acc;
}, []);

console.log(res)