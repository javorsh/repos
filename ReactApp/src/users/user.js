import Entity from '../common/entity.js';

class User {
    
  constructor({ name, password, role, ip }) {
        this.name = name;
        this.password = password;
		this.role = role;
		this.ip=ip;
    }
    toString() {
        return ` name: ${this.name}, password: ${this.password}, role: ${this.role}, ip: ${this.ip}';
    }
}

export default User;

// module.exports = Entity;