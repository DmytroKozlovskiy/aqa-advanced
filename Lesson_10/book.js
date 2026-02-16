
export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = Number(year);
  }

  printInfo() {
    console.log(`${this.title} was written by ${this.author} in ${this.year}`);
  }

  get Title() { return this.title; }
  get Author() { return this.author; }
  get Year() { return this.year; }

  set Title(v) {
    if (!v || typeof v !== 'string') throw new Error('Title must be a non-empty string');
    this.title = v;
  }
  set Author(v) {
    if (!v || typeof v !== 'string') throw new Error('Author must be a non-empty string');
    this.author = v;
  }
  set Year(v) {
    const n = Number(v);
    if (!Number.isInteger(n) || n < 0) throw new Error('Year must be a positive integer');
    this.year = n;
  }
  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('books must be a non-empty array');
    }
    return books.reduce((oldest, cur) => (cur.year < oldest.year ? cur : oldest));
  }
}
