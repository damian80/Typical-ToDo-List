// targetting 'add a new todo section - .add class'
const add = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;
  list.innerHTML += html;
};
// telling what todo after 'new todo' added
add.addEventListener("submit", e => {
  e.preventDefault();
  const todo = add.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});
// delete todos
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
// search&filters
const filterTodos = (term) => {
    array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase()includes(term))
    .foreach((todo) => todo.classList.remove('filtered'));

    // cdn.......
};
