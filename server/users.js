let users = [];
const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const exitingUser = users.find(e => e.name === name);
  if (!name || !room) return { error: 'Name and room are required' };
  if (exitingUser) return { error: 'Username is taken' };
  const user = { id, name, room };
  users.push(user);
  return { user };
};

const removeUser = id => {
  const removingUserIndex = users.findIndex(e => e.id === id);
  if (removingUserIndex !== -1) {
    return users.slice(removingUserIndex, 1)[0];
  }
};

const getUser = id => {
  const user = users.find(e => e.id === id);
  if (user) {
    return user;
  }
};

module.exports = { addUser, removeUser, getUser };
