// class Books {
//   constructor(books = []) {
//     this.list = books;
//   }
// }

// class Book {
//   constructor(title, author, id) {
//     this.title = title;
//     this.author = author;
//     this.id = id;
//   }
// }

class Methods {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
  addBook = (bookTitle, bookAuthor, bookId) => {
    const book = {
      title: bookTitle,
      author: bookAuthor,
      id: bookId
    }
    this.books.push(book);
  };
  removeBook = (id) => {
    this.books.splice(this.books[id-1], 1);
  };
}

let methods = new Methods();
methods.books = [];

const saveData = () => {
  localStorage.setItem('myBooks', JSON.stringify(methods.books));
};

const displayBooks = () => {
  console.log("display");
  const booksList = document.querySelector('.books');
  booksList.innerHTML = '';
  for (let i = 0; i < methods.books.length; i += 1) {
    const book = methods.books[i];
    console.log("book");
    console.log(book);
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.textContent = book.title;

    const h3 = document.createElement('h3');
    h3.classList.add('author');
    h3.textContent = book.author;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add(`remove-${book.id}`);
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      console.log("the id of the book is:")
      console.log(book.id)
      methods.removeBook(book.id);
      displayBooks();
    });

    bookElement.appendChild(h2);
    bookElement.appendChild(h3);
    bookElement.appendChild(removeBtn);

    booksList.appendChild(bookElement);

    const hr = document.createElement('hr');
    booksList.appendChild(hr);
  }
  saveData();
};

const getData = () => {
  const formData = JSON.parse(localStorage.getItem('myBooks'));
  if (formData == null) {
    methods.books = [];
  } else {
    methods.books = formData;
  }
};

// window.onload = getData();
window.onbeforeunload = () => {
  getData();
  displayBooks();
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
  const bookId = methods.books.length + 1;
  methods.addBook(bookTitle, bookAuthor, bookId);
  displayBooks();
  saveData();
});

getData();
displayBooks();
