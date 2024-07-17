#!/usr/bin/env node
import inquirer from "inquirer";
const apiLink = "https://opentdb.com/api.php?amount=4&category=18&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res;
};
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    //for user name
    let name = await inquirer.prompt({
        type: "input",
        name: "fName",
        message: "What Is Your Name"
    });
};
for (let i = 1; i <= 5; i++) {
    let answers = [...data[i].incorrect_answers, data[i].correct_answer];
}
