// When to returb something from function?
// Function composition
// f(g(x));

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function times(a, b){
    return a * b;
}


const a = 10;
const b = 5;
// const r = sum(a, b);
// console.log('R= ', r)

// const r1 = sub(a, b)
// console.log('R1= ', r1);

const r = times(sum(a, b), sub(a, b));
// console.log(r);

// Function is first class citizen. Because we can treat function as a value.
// Benefits of a function treat as a value:
// We can store funtion in a variable

function testFunc(){
 //   console.log("I'm a test function");
}

const fn = testFunc;
// console.log(fn.toString());

// We can store function in an Array/Object
const arr = [1, 2, 'Rabi', false, fn, testFunc];
//console.log(arr);
const obj = {
    fn: testFunc
}
// console.log(obj);
// We can pass function as an argument
function fnArg(fn){
    return fn()
}
fnArg(fn);
// We can also return a funtion from another function
function returnfn(){
    return fn;
}

// ##############################################################################
// Functon Construction
// Last argument must be function body.

const newFn = new Function(
    'str',
    `let obj = {};
    for(let s of str){
        if(s !== ' '){
            obj[s] = s;
        }
    }
    return obj;
    `
)
// console.log(newFn('Rabiul hossain'))

const fnData = {
    params: ['a', 'b'],
    body: ['const r = a + b', 'return r']
}

const fnBody = fnData.body.reduce((acc, cur) => {
    acc += cur + ';';
    return acc;
}, '');

const func = new Function(...fnData.params, fnBody);
// console.log(func(10, 5));

const greetfn = new Function(
    'name',
    'email',
    `const fName = name.split(' ')[0];
    console.log('Hello', fName, 'Is that your email?', email);
    console.log('Yeah, this is my email.');
    return fName;
    `
)

// const fnName = greetfn('Rabiul hossain', 'rabiiipedia@gmail.com');
// console.log(fnName);

const operations = [
    {
        args: [20, 10],
        params: ['a', 'b'],
        body: 'console.log("a + b",a + b)',
    },
    {
        args: [20, 10],
        params: ['a', 'b'],
        body: 'console.log("a - b",a - b)',
    },
    {
        args: [20, 10],
        params: ['a', 'b'],
        body: 'console.log("a * b",a * b)',
    }
];

operations.forEach((operation) => {
    const fn = new Function(...operation.params, operation.body);
    fn(...operation.args);
})

