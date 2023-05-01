// import BooksList class
import BooksList from './modules/bookslistClass.js';
// Create BooksList instantiation and call the Magic Method
const booksList = new BooksList();
booksList.Magic();

// Page content display by clicking on the corresponding navbar menu item
const navbarList = document.getElementById('navbar');
document.getElementById('form').style.display = 'none';
document.getElementById('contact').style.display = 'none';
navbarList.addEventListener('click', (event) => {
  if (event.target && event.target.matches('a.linkList')) {
    document.getElementById('form').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    if (document.getElementById('bookList').style.display === 'none') {
      document.getElementById('bookList').style.display = 'flex';
    }
  }
  if (event.target && event.target.matches('a.linkAdd')) {
    document.getElementById('bookList').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    if (document.getElementById('form').style.display === 'none') {
      document.getElementById('form').style.display = 'flex';
    }
  }
  if (event.target && event.target.matches('a.linkContact')) {
    document.getElementById('bookList').style.display = 'none';
    document.getElementById('form').style.display = 'none';
    if (document.getElementById('contact').style.display === 'none') {
      document.getElementById('contact').style.display = 'flex';
    }
  }
});