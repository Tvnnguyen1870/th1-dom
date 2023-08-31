// Lấy ra phần tử ul và gán vào biến todoList.
// Tạo biến newTodo với giá trị là một phần tử li.
// Gán nội dung cho biến newTodo = 'Do homework'.
// Thêm phần tử newTodo vào todoList với phương thức appendChild.
var newTodo = document.querySelector('#container')
newTodo = document.createElement('li')
newTodo.innerText = 'Do homework'
container.appendChild(newTodo)

// Tạo biến anotherTodo và khởi tạo giá trị là một phần tử li.
// Gán nội dung cho biến anotherTodo = 'Pay bills'.
// Thực hiện chèn anotherTodo vào phần tử todoList bằng phương thức insertBefore().
const anotherTodo = document.createElement('li')
anotherTodo.innerText = 'hello world'
container.insertBefore(anotherTodo, container.firstElementChild);

// Tạo biến modifiedTodo và khởi tạo giá trị là một phần tử li.
//Gán nội dung cho biến modifiedTodo = 'Feed the dog'.
//Thực hiện thay modifiedTodo cho phần tử ở vị trí thứ 3 trong todoList bằng phương thức replaceChild().
const modifiedTodo = document.createElement('li')
modifiedTodo.innerText = 'hello everyone'
container.replaceChild(modifiedTodo, container.children[2]);

//Thực hiện xóa phần tử ở vị trí thứ 2 trong todoList bằng phương thức remove().
container.children[1].remove();