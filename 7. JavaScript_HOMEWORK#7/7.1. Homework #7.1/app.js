/* CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
    -name
    -kind
    -speak (method)
    this method will take one parameter and will print in the console a message: 
    e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs */

const animal = {
    name: prompt('Enter animal name:'),
    kind: prompt('Enter animal kind:'),
    speak: function (message) {
        return `The ${this.kind} with name ${this.name} speaks: ${message}`;
    }
}

console.log(animal.speak('Woof, woof!'));

