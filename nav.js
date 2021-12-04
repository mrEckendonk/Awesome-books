const listNav = document.querySelector('#listNav');
const addNav = document.querySelector('#addNav');
const contactNav = document.querySelector('#contactNav');

const booksListSection = document.querySelector('#books-list');
const addBooksSection = document.querySelector('#add-books');
const contactListSection = document.querySelector('#contact-list');

listNav.addEventListener('click', () => {
  if (booksListSection.classList.contains('d-none')) {
    booksListSection.classList.remove('d-none');
    addBooksSection.classList.add('d-none');
    contactListSection.classList.add('d-none');
  }
});

addNav.addEventListener('click', () => {
  if (addBooksSection.classList.contains('d-none')) {
    booksListSection.classList.add('d-none');
    addBooksSection.classList.remove('d-none');
    contactListSection.classList.add('d-none');
  }
});

contactNav.addEventListener('click', () => {
  if (contactListSection.classList.contains('d-none')) {
    booksListSection.classList.add('d-none');
    addBooksSection.classList.add('d-none');
    contactListSection.classList.remove('d-none');
  }
});
