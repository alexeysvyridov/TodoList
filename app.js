// Book class:Represent a Book
class Book {
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class Ui {
  static displayBooks() {
    const StoredBooks = [
      {
        title:'Book One',
        author:'John Doe',
        isbn:'353535',
      },
      {
        title:'Book two',
        author:'Jane Doe',
        isbn:'4511',
      }
    ];
    
    const books = StoredBooks;

    books.forEach(book => Ui.addBookToList(book));

  }
  static addBookToList(book){
    console.log(book)
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-small delete">X</a></td>
    `;
    list.appendChild(row);
    
  }

  static deleteBook(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

document.addEventListener('DOMContentLoaded', Ui.displayBooks);

document.querySelector('#book-form').addEventListener('submit',
  (e)=>{
    e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  const book = new Book(title, author, isbn);

  Ui.addBookToList(book);

  Ui.clearFields();
})

document.querySelector('#book-list').addEventListener('click',
 (e) =>{
  Ui.deleteBook(e.target);
})


  // static addBookToList(book){
  //   const list = document.getElementById('book-list');
  //   const row = document.createElement('tr');
  //   row.innerHTML = `
  //   <td class="text-center">${book.title}</td>
  //   <td class="text-center">${book.author}</td>
  //   <td class="text-center">${book.isbn}</td>
  //   <td class="text-center"><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  //   `;
  //   list.appendChild(row);
  // }


// // Book class:Represent a Book
// class Book {
//   constructor(title,author,isbn){
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }


// //Ui Class:Handles Storage
// class Store {
//   static getBooks(){
//     let books;
//     if(localStorage.getItem('books') === null){
//       books = [];
//     }
//     else{
//       books = JSON.parse(localStorage.getItem('books'));
//     }
//     return books;
//   }

//   static addBook(book){
//     const books = Store.getBooks();
//     books.push(book);
//     localStorage.setItem('books', JSON.stringify(books));
//   }

//   static removeBook(isbn){
//     let books = Store.getBooks();
//     books.forEach((book, index)=>{
//       if(book.isbn === isbn){
//         books.splice(index,1);
//       }
//     });
//     localStorage.setItem('books', JSON.stringify(books));
//   }
// }


// Event:Display Book 
// class Ui {
//   static displayBooks(){
     
//     const books = Store.getBooks();

//     books.forEach( book => Ui.addBookToList(book));
//   }
  
//   static addBookToList(book){
//     const list = document.getElementById('book-list');
//     const row = document.createElement('tr');
//     row.innerHTML = `
//     <td class="text-center">${book.title}</td>
//     <td class="text-center">${book.author}</td>
//     <td class="text-center">${book.isbn}</td>
//     <td class="text-center"><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
//     `;
//     list.appendChild(row);
//   }

//   static clearFields(){
//     document.querySelector('#title').value = '';
//     document.querySelector('#author').value = '';
//     document.querySelector('#isbn').value = '';
//   }

//   static deleteBook(el){
//     if(el.classList.contains('delete')){
//       el.parentElement.parentElement.remove();
//     }
//   }

//   static showAlert(message, className){
//     const div = document.createElement('div');
//     div.className = `alert alert-${className}`;
//     div.appendChild(document.createTextNode(message));
//     const container = document.querySelector('.container');
//     const form = document.querySelector('#book-form')
//     container.insertBefore(div,form);
//     //make Vanished in 3 sec
//     setTimeout(()=> document.querySelector('.alert').remove(),3000);
//   }
// }


// // Event: add Books
// document.addEventListener('DOMContentLoaded', Ui.displayBooks);

// document.querySelector('#book-form').addEventListener('submit',
// (e)=>{
//   //Prevent actual submit
//   e.preventDefault();

//   //Get form values
//   const title = document.querySelector('#title').value;
//   const author = document.querySelector('#author').value;
//   const isbn = document.querySelector('#isbn').value;

//   //Validate
//   if(title === '' || author === '' || isbn === ''){
//     Ui.showAlert("Please fill in all fields", 'danger');
//   }
//   else{
//   //Instantiate book
//   const book = new Book (title, author, isbn);

//   //add book toUi
//   Ui.addBookToList(book);
//   // add book to storage
//   Store.addBook(book)

//   // Show success message
//   Ui.showAlert('Book added', 'success');
//   //clearfields book
//   Ui.clearFields();
//   }
// })
// // Event: remove Books
// document.querySelector('#book-list').addEventListener('click', (e)=>{
//   Ui.deleteBook(e.target);
//   //REMOVE book in storage
//   Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
//   // Show success message
//   Ui.showAlert('Book removed', 'success');
// })