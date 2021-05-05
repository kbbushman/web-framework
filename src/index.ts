import { User } from './models/User';

const user = new User({ name: 'New Person', age: 33 });
// user.set({ name: 'New Name', age: 44 });
user.save();
