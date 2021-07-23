export class UsersService {
  private users = [
    {
      userName: 'laza',
      password: 'lazic',
    },
    {
      userName: 'pera',
      password: 'peric',
    },
    {
      userName: 'jova',
      password: 'jovic',
    },
  ];

  userExists(username: string, password: string) {
    let existingUser = this.users.filter(
      (u) => u.userName === username && u.password === password
    );
    if (existingUser.length === 1) {
      return true;
    }
    return false;
  }
}
