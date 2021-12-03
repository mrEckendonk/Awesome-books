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
    console.log("display works");
    const booksList = document.querySelector('.books');
    booksList.innerHTML = '';
    let row = document.createElement('div');
    row.classList.add('row', 'gx-4', 'gx-lg-5', 'mb-5');
    for (let i = 0; i < this.books.length; i += 1) {
      console.log(i);
      const book = this.books[i];
      const column = document.createElement('div');
      column.classList.add('col-md-4', 'mb-3', 'mb-md-0');

      /* start */
      const template = `
      <div class="book card py-4 h-100">
        <div class="card-body text-center">
          <i class="fas fa-book text-primary mb-2"></i>
          <h4 class="title text-uppercase m-0">${book.author}</h4>
          <hr class="my-4 mx-auto" />
          <div class="author small text-black-50">
            ${book.author}
          </div>
          <div class="col-auto mt-4">
            <button
              class="btn btn-remove btn-secondary remove-${book.id}"
              id="submitButton"
              type="button"
            >
              Remove Book
            </button>
          </div>
        </div>
      </div>
      `;
      /* end  */

      column.innerHTML = template;
      row.appendChild(column);
      console.log(row);
      console.log(i);

      if (i % 3 === 0 && i !== 0) {
        booksList.appendChild(row);
        row = document.createElement('div');
        row.classList.add('row', 'gx-4', 'gx-lg-5', 'mb-5');
        console.log('addded first row');
      } else {
        booksList.appendChild(row);
      }
    }
    for (let i = 0; i < this.books.length; i += 1) {
      const book = this.books[i];
      const removeBtn = document.querySelector(`.remove-${book.id}`);
      removeBtn.addEventListener('click', () => {
        this.removeBook(book.id);
        this.displayBooks();
      });
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
const author = form.querySelector('.author');
const title = form.querySelector('.title');

const addBtn = document.querySelector('.add-btn');
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
