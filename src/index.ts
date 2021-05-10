import { User } from './models/User';

const user = new User({ id: 1, name: 'newiest name', age: 44 });

user.on('save', () => {
  console.log(user);
});

user.save();
