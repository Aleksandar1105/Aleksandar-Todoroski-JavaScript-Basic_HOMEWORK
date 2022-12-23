// const student1 = {
//     name: 'Aleksandar',
//     class: 'G1',
//     school: 'SEDC',
//     number: 21
// }

function newStudent(firstName, groupName, schoolName, studentNumber) {
    this.name = firstName;
    this.group = groupName;
    this.school = schoolName;
    this.number = studentNumber;
    this.printStudent = function () {
        return `${this.name} ${this.group} - ${this.school}, No.${this.number}`;
    }
}


const student1 = new newStudent('Aleksandar', 'G1', 'SEDC', 21);
console.log(student1);
console.log(student1.printStudent());
