const User = require('../models/user')
exports.getAllUser = (req, res) => {
    res.json(User.getUsers());
}
exports.getUser = (req, res) => {
    res.send(req.params);
}
exports.addUser = (req, res) => {
    const newUser = req.body;
    const user = new User(newUser.id, newUser.name, newUser.role);
    user.addUser();
    res.send(User.getUsers());
}
exports.removeUser = (req, res) => {
    User.removeUser(req.params.id);
    res.send(User.getUsers());
}