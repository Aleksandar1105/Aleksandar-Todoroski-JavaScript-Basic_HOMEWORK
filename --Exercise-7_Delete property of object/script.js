/* Write a JavaScript program to delete the rollno property from the following object. 
Also print the object before or after deleting the property.

Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12
} */

const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}
console.log('Before deleting property:');
console.log(student);

function deleteProperty(object, property) {
    delete object[property];
    return object;
}

console.log('After deleting property:');
console.log(deleteProperty(student, 'rollno'));