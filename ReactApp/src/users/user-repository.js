// const User = require('./uses');
import User from './user.js';

const METEO_USERS = [
    new User('javorsh', 'javorsh1', 'REGISTERED', '*'),
    new User('admin', 'admin1', 'ADMIN', '*'),
	new User('anonymous', '', 'GUEST', '*'),
	new User('weather', 'weather11', 'REGISTERED', '*'),
	new User('root', 'root', 'ADMIN', '*'),
	new User('meteo', 'meteo1', 'REGISTERED', '*')
    
];

let nextId = 0;
class UserRepository {
    users = new Map();
    constructor() {
        METEO_USERS.forEach(user => this.create(user));
    }
    create(user) {
        user.id = ++nextId;
        this.users.set(user.id, user);
        return user;
    }
    findAll() {
        return this.users.values();
    }
    findById(id) {
        return this.users.get(id);
    }
    update(user) {
        this.users.set(user.id, user);
        return user;
    }
    deleteById(id){
        return this.users.delete(id);
    }
    getCount() {
        return this.users.size;
    }
}

const userRepo = new UserRepository();
// for(const user of userRepo.findAll()) {
//     console.log(user);
// }
const firstUser = userRepo.findById(1);
firstUser.password = 'mynewpass';
userRepo.update(firstUser);
console.log(Array.from(userRepo.findAll()));

userRepo.deleteById(5);
console.log(Array.from(userRepo.findAll()));
console.log(userRepo.getCount());

export default UserRepository;