import { Book } from './book.js';

export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  printInfo() {
    console.log(
      `${this.title} was written by ${this.author} in ${this.year} and the file format is ${this.fileFormat}`
    );
  }

  get FileFormat() { return this.fileFormat; }
  set FileFormat(v) {
    if (!v || typeof v !== 'string') throw new Error('File format must be a non-empty string');
    this.fileFormat = v;
  }

  static fromBook(book, format) {
    if (!(book instanceof Book)) throw new Error('First argument must be an instance of Book');
    if (!format || typeof format !== 'string') throw new Error('format must be a non-empty string');
    return new EBook(book.title, book.author, book.year, format);
  }
}
