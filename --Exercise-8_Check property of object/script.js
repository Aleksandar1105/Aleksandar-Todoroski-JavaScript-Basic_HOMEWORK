/* Write a JavaScript function to check if an object contains given property */

const student = {
    firstName: 'Aleksandar',
    lastName: 'Todoroski',
    age: 37,
    gender: 'male',
    hasDrivingLicence: true,
    school: 'SEDC',
    group: 'G1'
}

console.log(student);

function checkProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return `The object contain ${property} property!`
    } else {
        return `The object doesn't contain ${property} property!`
    }
}

console.log(checkProperty(student, 'age'));

