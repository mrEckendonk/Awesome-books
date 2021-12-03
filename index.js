class BookList {
  constructor() {
    this.books = [];
  }

  addBook = (bookTitle, bookAuthor) => {
    const book = {
      title: bookTitle,
      author: bookAuthor,
      id: this.generateId(),
    };
    this.books.push(book);
  };

  saveData = () => {
    localStorage.setItem('myBooks', JSON.stringify(this.books));
  };

  removeBook = (id) => {
    this.books = this.books.filter((book) => book.id !== id);
  };

  getData = () => {
    const formData = JSON.parse(localStorage.getItem('myBooks'));
    if (formData == null) {
      this.books = [];
    } else {
      this.books = formData;
    }
  };

  generateId = () => {
    let id = Math.ceil(Math.random() * 100000000000);
    while (this.books.indexOf(id) !== -1) {
      id = Math.ceil(Math.random() * 100000000000);
    }
    return id;
  };

  displayBooks = () => {
    const booksList = document.querySelector('.books');
    booksList.innerHTML = '';
    for (let i = 0; i < this.books.length; i += 1) {
      const book = this.books[i];
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
        this.removeBook(book.id);
        this.displayBooks();
      });

      bookElement.appendChild(h2);
      bookElement.appendChild(h3);
      bookElement.appendChild(removeBtn);

      booksList.appendChild(bookElement);

      const hr = document.createElement('hr');
      booksList.appendChild(hr);
    }
    this.saveData();
  };
}

const booklist = new BookList();

window.onbeforeunload = () => {
  booklist.getData();
  booklist.displayBooks();
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
  booklist.addBook(bookTitle, bookAuthor);
  booklist.displayBooks();
  booklist.saveData();
});

booklist.getData();
booklist.displayBooks();
