const BookController = require('../controllers/book.controller')

module.exports = (app) =>{
    app.get("/api/books/:userId", BookController.getAll)
    app.get("/api/book/:id", BookController.getOne)
    app.post("/api/books", BookController.addBook)
    app.put("/api/books/:id", BookController.updateBook)
    app.delete("/api/books/:id", BookController.deleteBook)
}