import { Collection } from './models/Collection';
import { UserList } from './views/UserList';
import { User, UserProps } from './models/User';
// import { UserEdit } from './views/UserEdit';

// const user = User.buildUser({ name: 'NAME', age: 23 });

// const root = document.getElementById('root');

// if (root) {
//   const userEdit = new UserEdit(root, user);

//   userEdit.render();
// } else {
//   throw new Error('Root element not found');
// }

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
