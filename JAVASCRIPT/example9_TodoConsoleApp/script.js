/**
 * "new" -> to add a new Todo
 * "list" -> to show all Todo
 * "delete" -> to delete a Todo
 * "quit" -> to quit the app
 */



const todos = ["Solve a hackerrank"];

let answer = prompt("What would you like to do");

while (answer != "quit") {
    if (answer === "new") {
        let newTodo = prompt("Enter a new Todo");
        todos.push(newTodo);
        answer = prompt("What would you like to do");
    } else if (answer === "list") {
        for (todo of todos) {
            console.log(todo)
        }
        answer = prompt("What would you like to do");
    } else if (answer === "delete") {
        let elementToDelete = prompt("Enter the number of Todo you want to delete");
        todos.splice(elementToDelete, 1);
        alert("Todo is deleted successfully!!");
        answer = prompt("What would you like to do");
    } else {
        answer = prompt("Enter a valid input");
    }
}

alert("CLOSING THE APP")