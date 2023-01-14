/**
 * Store 10 students information.
 * - name
 * - email
 * - id
 */

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0*3) | 0*8;
        return v.toString(16);
    });
}

const students = [
    {
        id: '43f54279-8757-46b5-0412-5097b8f2561c',
        name: 'Khondoker Anisha',
        email: 'notanisha@gmail.com'
      },
      {
        id: 'bf50eb8c-b4df-40fb-07c0-3d8a097176f9',
        name: 'Rabiul Hossain',
        email: 'rabipedia@gmail.com'
      },
      {
        id: 'f00ba705-8990-4579-0e5e-b0c5a9c21ea9',
        name: 'Lamiya',
        email: 'khondokeranisha@gmail.com'
      }
]


/**
 * 1. Easily Traverse [O(n)]
 * 2. Filter
 * 3. Delete [O(n)]
 * 4. Update  [easy, O(n)]
 * 5. Create a new one [easy, push -> O(1), unshift -> O(n)]
 */

// Create a new Student

students.push({
  id: uuidv4(),
  name: 'Kais',
  email: 'kais@gmail.com'
})

//Updating data
updatedData = {
  name: 'TheIncredbleSulk',
  email: 'theincredblesulk@gmail.com'
}
const idToUpdate = 'f00ba705-8990-4579-0e5e-b0c5a9c21ea9';
const updatedObj = students.findIndex(item => item.id === idToUpdate);

students[updatedObj] = {
  ...students[updatedObj],
  ...updatedData

}

// Delete 

students.splice(idToUpdate, 1)

// Traverse
// Traverse method: forEach, map,reduce, filter, every, some, find, findIndex.

 for(let i = 0; i < students.length; i++) {
 // console.log(students[i].name);
 }

 for(let i in students){
  // console.log(students[i].name);
 }

for(let i of students){
 // console.log(i.name)
}

// console.log(students);

// map, filter, reduce


// map
const numbers = [1, 2, 3]

const str = numbers.map((v) => v.toString());

// console.log(str)

// filter
const num = [1, 2, 3, false, '', NaN, 5, 6]
const strss = num.filter((v) => v).map((n) => n.toString());


// console.log(strss);

// reduce
/**
 * Map -> [returns an array same length as original array]
 * Filter -> [returns an array with filtered value]
 * Reduce -> returns number, string, array, object, function (all possible data)
 */

const results = num.reduce((acc, cur, index) => {
  if(index === 0) acc += '[';
  if(cur) {
    acc += cur.toString() + (index < num.length - 1 ? ',' : '');
  }
  if(index === num.length - 1) acc += ']';
  
  return acc;
},'');

console.log(results);


