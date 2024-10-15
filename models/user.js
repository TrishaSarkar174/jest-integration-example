// models/user.js

// In-memory mock database
const users = [];

class User {
  static async findAll() {
    return users;
  }

  static async create(data) {
    const user = { id: users.length + 1, ...data };
    users.push(user);
    return user;
  }

  static reset() {
    users.length = 0;
  }
}

module.exports = User;
