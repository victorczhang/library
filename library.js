let myLibrary = [
    new Book('J.R.R. Tolkien', 'The Hobbit', '200', 'Yes')
];

function Book(author, title, numOfPages, isRead) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.numOfPages = numOfPages;
  this.isRead = isRead;
}

Book.prototype.changeReadStatus = function() {
    // changing from not read to read
    if (this.isRead == 'No') {
        // console.log('Not read!');
        this.isRead = 'Yes';
        render();
        // this.isRead == 1;
        // myLibrary[i].isRead == 1;

    } else if (this.isRead == 'Yes') {
        // changing from read to not read
        // console.log('Read!');
        this.isRead = 'No';
        render();
        // myLibrary[i].isRead == 0;
    }
}

function addBookToLibrary() {
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let numOfPages = document.getElementById('page-count').value;
    let isRead = document.querySelector('input[name="isRead"]:checked').value;

    let newBook = new Book(author, title, numOfPages, isRead);

    myLibrary.push(newBook);
    render();
    clearInputs();
}

function render() {
    // displays each book on the page
    document.getElementById('table-body').innerHTML = '';

    for (i=0; i < myLibrary.length; i++) {
        var table = document.getElementById('table-body');
        var row = table.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = myLibrary[i].author;
        cell2.innerHTML = myLibrary[i].title;
        cell3.innerHTML = myLibrary[i].numOfPages;

        if (myLibrary[i].isRead == 'Yes') {
            cell4.innerHTML = `<button class=readStatusButton id=readStatusButton-${i} onclick="myLibrary[${i}].changeReadStatus()">${myLibrary[i].isRead}</button>`;
        } else if (myLibrary[i].isRead == 'No') {
            cell4.innerHTML = `<button class=unreadStatusButton id=readStatusButton-${i} onclick="myLibrary[${i}].changeReadStatus()">${myLibrary[i].isRead}</button>`;
        };

        // cell4.innerHTML = `<button class=readStatusButton id=readStatusButton-${i} onclick="myLibrary[${i}].changeReadStatus()">${myLibrary[i].isRead}</button>`;
        cell5.innerHTML = `<button class=delButtons id=delButton-${i} onclick="removeBook(${i})">&#10006</button>`;
    }
}

function removeBook(i) {
    myLibrary.splice(i, 1);
    render();
}

function openForm() {
    // Display Form
    if (document.getElementById('book-form').className = 'form-hidden') {
        document.getElementById('book-form').className = 'form-visible';
    };

    // Hide Button
    document.getElementById('open-form').style.display = 'none';
}

function closeForm() {
    // Hide Form
    if (document.getElementById('book-form').className = 'form-visible') {
        document.getElementById('book-form').className = 'form-hidden';
    };

    // Show button
    document.getElementById('open-form').style.display = 'block';
    clearInputs();
}

function clearInputs() {
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('page-count').value = '';

    document.getElementById('isReadYes').checked = false;
    document.getElementById('isReadYes').value = '';

    document.getElementById('isReadNo').value = '';
    document.getElementById('isReadNo').checked = false;
}

function clearAll() {
    myLibrary.splice(0, myLibrary.length);
    render();
}

render();