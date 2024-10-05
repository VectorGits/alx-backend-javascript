export default class HolbertonCourse {
    constructor (name, length, students) {
        this.checkType(name, 'string', 'Name');
        this.checkType(length, 'number', 'Length');
        this.checkType(students, 'array', 'Students');
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this.checkType(name, 'string', 'Name');
        this._name = name;
    }

    get length() {
        return this._length;
    }

    set length(length) {
        this.checkType(length, 'number', 'Length');
        this._length = length;
    }

    get students() {
        return this._students;
    }

    set students(students) {
        this.checkType(students, 'array', 'Students');
        students.forEach((student) => this.checkType(student, 'string', 'Student'));
        this._students = students;
    }
}