var newUsers = [{
  user: 'tosone',
  pwd: '8541539655',
  roles: [{
    role: 'readWrite',
    db: 'CodeShare'
  }]
}];

db.dropAllUsers();

for (var i = 0, length = newUsers.length; i < length; ++i) {
  db.createUser(newUsers[i]);
}
