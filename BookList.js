class BookList {
  constructor() {
    this.books = []
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
    this.books = this.books.filter(book => book.id !== id);
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
    while (this.books.find(book => book.id === id)) {
      id = Math.ceil(Math.random() * 100000000000);
    }
    return  id;
  };
}
