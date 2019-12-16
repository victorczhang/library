let myLibrary = [
    new Book('J.R.R. Tolkien', 'The Hobbit', '200', '1')
];

function Book(author, title, numOfPages, isRead) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.numOfPages = numOfPages;
  this.isRead = isRead;
}

function addBookToLibrary() {
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let numOfPages = document.getElementById('page-count').value;
    let isRead = document.querySelector('input[name="isRead"]:checked').value;

    let newBook = new Book(author, title, numOfPages, isRead);

    myLibrary.push(newBook);
    render();
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

        cell1.innerHTML = myLibrary[i].author;
        cell2.innerHTML = myLibrary[i].title;
        cell3.innerHTML = myLibrary[i].numOfPages;
        cell4.innerHTML = myLibrary[i].isRead;
    }
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
}

render();