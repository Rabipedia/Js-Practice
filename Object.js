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

const students = {
    '43f54279-8757-46b5-0412-5097b8f2561c': {
        id: '43f54279-8757-46b5-0412-5097b8f2561c',
        name: 'Khondoker Anisha',
        email: 'notanisha@gmail.com'
      },
      'bf50eb8c-b4df-40fb-07c0-3d8a097176f9': {
        id: 'bf50eb8c-b4df-40fb-07c0-3d8a097176f9',
        name: 'Rabiul Hossain',
        email: 'rabipedia@gmail.com'
      },
      'f00ba705-8990-4579-0e5e-b0c5a9c21ea9': {
        id: 'f00ba705-8990-4579-0e5e-b0c5a9c21ea9',
        name: 'Lamiya',
        email: 'khondokeranisha@gmail.com'
      }
}

/**
 * 1. Easily Traverse
 * 2. Filter [O(1)]
 * 3. Delete [O(1)]
 * 4. Update  [easy, O(1)]
 * 5. Create a new one [easy, O(1)]
 */

// create

const std = {
    id: uuidv4(),
    name: 'Arowa',
    email: 'arowa@gmail.com'
}

students[std.id] = std;

// Update 

const idToUpdate = 'f00ba705-8990-4579-0e5e-b0c5a9c21ea9';
const updatedData = {
    name: 'incredbleSulk',
    email: 'incredbleSulk@gmail.com'
}

students[idToUpdate] = {
    ...students[idToUpdate],
    ...updatedData
}

// Delete
delete students[idToUpdate];

console.log(students);