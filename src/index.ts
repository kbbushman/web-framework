import { User } from './models/User';

const user = new User({ name: 'John Doe', age: 22 });
user.set({ name: 'Kevin Smith' });
console.log(user.get('name'));
console.log(user.get('age'));
