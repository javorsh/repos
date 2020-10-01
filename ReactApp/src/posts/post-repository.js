// const Post = require('./posts');
import Post from './posts.js';

const METEO_USERS = [
    new Post('New Weatherman', 'Yavor Sheptoev', 'New Weather Features are here ...', ['es6', 'promises'],'https://freesvg.org/img/post2.png'),
    new Post('New Weatherman 2', 'Trayan Iliev', 'New Weather Features are here ...', ['es6', 'promises'],'https://freesvg.org/img/post2.png'),
    new Post('New Weatherman 3', 'Trayan Iliev', 'New Weather Features are here ...', ['es6', 'promises'],'https://freesvg.org/img/post2.png'),

];

let nextId = 0;
class PostRepository {
    posts = new Map();
    constructor() {
        METEO_USERS.forEach(post => this.create(post));
    }
    create(post) {
        post.id = ++nextId;
        this.posts.set(post.id, post);
        return post;
    }
    findAll() {
        return this.posts.values();
    }
    findById(id) {
        return this.posts.get(id);
    }
    update(post) {
        this.posts.set(post.id, post);
        return post;
    }
    deleteById(id){
        return this.posts.delete(id);
    }
    getCount() {
        return this.posts.size;
    }
}

const postRepo = new PostRepository();
// for(const post of postRepo.findAll()) {
//     console.log(post);
// }
const firstPost = postRepo.findById(1);
firstPost.password = 'mynewpass';
postRepo.update(firstPost);
console.log(Array.from(postRepo.findAll()));

postRepo.deleteById(2);
console.log(Array.from(postRepo.findAll()));
console.log(postRepo.getCount());

export default PostRepository;