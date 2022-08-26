const UserController = require('../controllers/user.controller')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.get('/api/user/allUsers', authenticate, UserController.index)
    app.get('/api/cookie', UserController.cookie)
    app.post('/api/user/register', UserController.register)
    app.post('/api/user/login', UserController.login)
    app.get('/api/user/logout', UserController.logout)
    app.get('/api/user/getUser', UserController.getUser)
}