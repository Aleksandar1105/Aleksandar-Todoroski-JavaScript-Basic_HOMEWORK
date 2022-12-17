// HOMEWORK#4 (Looping structures)

/* Write a loop in JavaScript that in range from 1 till 20 
will write in the console every number, and will add the "\n" new line 
after every even number otherwise it will add " " empty space. */

function oddEven() {
    for (let i = 1; i <= 20; i++) {
        // console.log(i);
        if (i % 2 === 0) {
            console.log('This is even number \n', i);
            // console.log('\n');
        } else {
            console.log('This is odd number', i);
            console.log(' ');
        }
    }
}

oddEven();