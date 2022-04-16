const { getStudent, registerStudent, login, logout, protected } = require('../controllers/student.controller');

module.exports = app => {
    app.post('/api/register', registerStudent);
    app.post('/api/login', login);
    app.post('/api/logout', logout);
    app.get('/api/user/:id', getStudent);
    app.get('/api/protected', protected);
}