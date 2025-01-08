const express = require("express")
const app = express()

const homeworkHelper = {
    vocab: [
        { term: "API: Application Programming Interface" },
        { term: "Modularization: Process of making code more compact and DRY"},
        { term: "HTTP: Hypertext Text Transfer Protocol"},
        { term: "Synchronous Programming: code that runs one line at a time top to bottom."},
        { term: "Asynchronous Programming: code that allows us to start running multiple lines of code and finish them later and not in order."},
    ],
    sample: [
        { ques: "What does API stand for?"},
        { ques: "What does HTTP stand for?"},
        { ques: "What does API stand for?"},
        { ques: "What is modularization, and what is the purpose of it?"},
        { ques: "What is the difference between asynchronous and synchronous programming?"},
    ],
};




app.use((request, response, next ) => {
    console.log(request.method + "" + request.url)
    next()
})

app.get("/", (request, response) => {
    response.status(200).send("<h1>Welcome to the Software Engineering Helper!")
})


app.get("/docs", (request, response) => {
    response.status(200).send("Go to /api/vocab to see vocab terms and go to api/sample to see sample questions")
})

app.get("/api/vocab", (request, response) => {
    response.status(200).json(homeworkHelper.vocab)
})

app.get("/api/sample", (request, response) => {
    response.status(200).json(homeworkHelper.sample)
})



app.use((request, response, next) => {
response.status(404).send("404 Not Found")
})

app.listen(3000, () => {
    console.log("Server running")
})