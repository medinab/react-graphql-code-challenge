const Query = {
  users(parent, args, { db }, info) {
    return db.users;
  },
  user(parent, args, { db }, info) {
    const user = db.users.find(user => user.name.includes(args.name));
    return [user];
  }
};

export default Query;
