const books = document.querySelectorAll('li');
let selectedBook = null;

books.forEach((book) => {
    book.addEventListener('click', () => {
        if (selectedBook) {
            selectedBook.classList.remove('selected');
        }
        book.classList.add('selected');
        selectedBook = book;
    });
});