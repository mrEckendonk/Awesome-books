const display = new Display();

window.onbeforeunload = () => {
  display.bookList.getData();
  display.displayBooks();
};

/* form functions */
const form = document.querySelector('form');
const author = form.querySelector('#author');
const title = form.querySelector('#title');

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  display.booklist.addBook(bookTitle, bookAuthor);
  display.displayBooks();
  display.booklist.saveData();
});

display.booklist.getData();
display.displayBooks();
