export interface SignInModel {
  email: string;
  password: string;
}


export interface SignUpModel extends SignInModel {
  fullName: string;
}
