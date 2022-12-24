/* Write a JavaScript program to display the reading status of some book. 
The object should have the next properties: title, author, readingStatus and
 a method that will return info depending on the readingStatus e.g.

 Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. 
(if false).

BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML */

const button = document.querySelector('#check-btn')

button.addEventListener('click', function (event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const readingStatus = document.querySelector('#select').value;
    const statusParagraph = document.querySelector('#status');

    const book = {
        title: title,
        author: author,
        readingStatus: readingStatus,
        checkReadStatus: function () {
            if (this.readingStatus === 'true') {
                return `Already read '${this.title}' by ${this.author}`
            } else {
                return `You still need to read '${this.title}' by ${this.author}`
            }
        }
    }

    statusParagraph.innerHTML = `<h2><i>${book.checkReadStatus()}</i></h2>`;
    console.log(book.checkReadStatus());
})