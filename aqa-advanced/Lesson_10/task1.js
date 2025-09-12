import { Book } from './book.js';
import { EBook } from './ebook.js';

const book1 = new Book('Book One', 'John Doe', 2013);
const book2 = new Book('Book Two', 'Jane Doe', 2016);
const book3 = new Book('Book Three', 'John Doe', 2018);

book1.printInfo();
book2.printInfo();
book3.printInfo();


const eBook1 = new EBook('Book One', 'John Doe', 2013, 'pdf');
eBook1.printInfo();


eBook1.FileFormat = 'epub';
console.log('Updated file format:', eBook1.FileFormat);

book1.Title = 'Book One (Updated)';
console.log('Updated title via getter:', book1.Title);


const oldest = Book.findOldestBook([book1, book2, book3, eBook1]);
console.log('Oldest book:', oldest);


const eBookFromBook = EBook.fromBook(book2, 'mobi');
eBookFromBook.printInfo();
