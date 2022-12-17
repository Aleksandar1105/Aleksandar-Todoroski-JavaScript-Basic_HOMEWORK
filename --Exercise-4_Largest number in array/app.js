const arrayOfTen = [2, 5, 3, 8, 1, 4, 6, 10, 7, 9];

function largestOften(arrayToCheck) {
    let i = 0;
    let largestNum = 0;

    while (i < arrayToCheck.length) {
        if (arrayToCheck[i] > largestNum) {
            largestNum = arrayToCheck[i]
        }
        i++;
    }
    return largestNum;
}


largestNumber = largestOften(arrayOfTen);
console.log('The largest number in array is', largestNumber);