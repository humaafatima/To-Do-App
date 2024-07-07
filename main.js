import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default: "true"
        }
    ]);
    if (todoQuestions.firstQuestion.trim() !== "") {
        todos.push(todoQuestions.firstQuestion);
        console.log(todos);
        condition = todoQuestions.secondQuestion;
    }
}
//console.log("you can't pass an empty value in the list");
