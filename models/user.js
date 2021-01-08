users = [{ id: '1', name: 'dev', role: 'admin' }, { id: '2', name: 'som', role: 'customer' }];
module.exports = class User {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
    addUser() {
        users.push(this);
    }
    static removeUser(id) {
        let index = users.findIndex(user => user.id == id);
        if (index >= 0) {
            users.splice(index, 1);
        }
    }
    static getUsers() {
        return users;
    }
}