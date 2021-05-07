import { User } from './models/User';

const user = new User({ name: 'Person 5', age: 0 });
// user.set({ name: 'New Name', age: 44 });
user.events.on('change', () => {
  console.log('change');
});

user.events.trigger('change');
