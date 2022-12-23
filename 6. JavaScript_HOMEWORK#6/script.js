// CREATE A DYNAMIC TABLE

/*  Write a Javascript function that will dynamiclly create a table
    - User should input the number of Colums and Rows
    - In every table cell print which row and column it is (ex. Row-3 Column-1)
    - Don't forget to use google! :) */

const button = document.querySelector('#create-table');

button.addEventListener("click", function clickToCreate() {
    const tableBody = document.querySelector('#table-body');
    const rowsNum = parseInt(prompt('Enter number of rows:'));
    const columnsNum = parseInt(prompt('Enter number of columns'));

    function createTable(numOfRows, numOfColumns) {
        for (let i = 0; i < numOfRows; i++) {
            tableBody.innerHTML += `<tr id="table-row"></tr>`;
            let row = tableBody.children[i];
            for (let j = 0; j < numOfColumns; j++) {
                row.innerHTML += `<td>Row-${i + 1} Column${j + 1}</td>`;
            }
        }
    }
    createTable(rowsNum, columnsNum);
    button.style.display = 'none';
});
