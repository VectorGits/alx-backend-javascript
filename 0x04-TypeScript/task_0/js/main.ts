interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating the two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New york',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Creating an array containing the two students
const studentsList: Student[] = [student1, student2];

const body = document.querySelector('body');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');


thead.innerHTML = `
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Age</th>
    <th>Location</th>
  </tr>
    `;


let tableData: string;

studentsList.forEach((student) => {
  tableData += `
  <tr>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.age}</td>
    <td>${student.location}</td>
  </tr>
  `
});


tbody.innerHTML = tableData;

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);