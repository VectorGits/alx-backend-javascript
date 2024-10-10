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
const studentsList: Student[] = [student1, student2]