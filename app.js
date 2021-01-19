// kinda old way of getting DOM elements
const tableMenu = document.getElementById('book-table')

// modern way of getting DOM elements
const formModal = document.querySelector('#form-modal')
const bookTableBtn = document.querySelector('#book-table-btn')
const closeModal = document.querySelector('#close-modal')

// click the close button
closeModal.addEventListener('click', function () {
  formModal.classList.add('hidden')
})

// click the book button
bookTableBtn.addEventListener('click', function () {
  formModal.classList.remove('hidden')
  // .add
  // .toggle
})

tableMenu.addEventListener('click', function (e) {
  document.body.classList.toggle('show-sidebar')
})

window.addEventListener('click', function (e) {
  // console.log(e.target)

  // One way... (for reference)
  // if (e.target === formModal) { // boolean
  //   formModal.classList.add('hidden')
  // } else { // false
  // return false
  // }

  //ternary operator
  // better and idiomatic way
  (e.target === formModal) ? formModal.classList.add('hidden') : false

})