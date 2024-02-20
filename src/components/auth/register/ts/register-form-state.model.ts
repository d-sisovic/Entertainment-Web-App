export interface IRegisterFormState {
    value: { email: string, password: string, repeatPassword: string };
    validity: { email: boolean, password: boolean, repeatPassword: boolean };
}
