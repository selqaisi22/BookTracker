const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/book_db', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .then(() => console.log("Established connection to the database"))
    .catch((err) => console.log("There was an error", err))