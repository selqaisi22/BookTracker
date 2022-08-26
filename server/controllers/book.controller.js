const {Book} = require('../models/book.model')
const {User} = require('../models/user.model')
const jwt = require('jsonwebtoken');

// module.exports.getAll = (req, res) =>{
//     Book.find()
//     .then(books => res.json(books))
//     .catch(err=> res.json(err))
// }

module.exports.getOne = (req, res) =>{
    Book.findOne({_id: req.params.id})
        .then(book => res.json(book))
        .catch(err=>res.json(err))
}

module.exports.getAll = (req, res) =>{
    Book.find({user: req.params.userId})
    .then(books => res.json(books))
    .catch(err=> res.status(400).json(err))
}

// module.exports.addBook = (req, res) =>{
//     Book.create(req.body)
//         .then(book => res.json(book))
//         .catch(err=> res.status(400).json(err))
// }

module.exports.addBook = async(req, res) =>{
    try{
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete:true})
        const newBook = new Book(req.body)
        newBook.user = decodedJwt.payload.id
        await newBook.save()

        const foundUser = await User.findOneAndUpdate({_id: decodedJwt.payload.id}, {$push: {books: newBook}}, {new: true})
        res.json(foundUser)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports.updateBook = (req, res) =>{
    Book.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true}
    )
        .then(book => res.json(book))
        .catch(err=> res.status(400).json(err))
}

module.exports.deleteBook = (req, res) =>{
    Book.deleteOne({_id: req.params.id})
        .then(book => res.json(book))
        .catch(err=> res.json(err))
}