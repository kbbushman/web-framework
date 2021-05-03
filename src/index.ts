import { User } from './models/User';

const user = new User({ name: 'John Doe', age: 22 });

user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('poop', () => {
  console.log('Poop!');
});

user.trigger('asdfasdf');
