import BookList from './BookList.js';

export default class Display {
  constructor() {
    this.booklist = new BookList();
  }

  displayBooks = () => {
    const booksList = document.querySelector('.books');
    booksList.innerHTML = '';
    for (let i = 0; i < this.booklist.books.length; i += 1) {
      const book = this.booklist.books[i];
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
        this.booklist.removeBook(book.id);
        this.displayBooks();
      });

      bookElement.appendChild(h2);
      bookElement.appendChild(h3);
      bookElement.appendChild(removeBtn);

      booksList.appendChild(bookElement);

      const hr = document.createElement('hr');
      booksList.appendChild(hr);
    }
    this.booklist.saveData();
  };
}
