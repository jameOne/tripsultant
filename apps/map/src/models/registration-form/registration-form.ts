export class Username {
  username: string;

  constructor(
    username: string
  ) {
    this.username = username;
  }
}

export class RegistrationForm extends Username {
  username: string;
  email: string;
  password1: string;
  password2: string;

  constructor(
    username: string,
    email: string,
    password1: string,
    password2: string
  ) {
    super(username);
    this.email = email;
    this.password1 = password1;
    this.password2 = password2;
  }
}
