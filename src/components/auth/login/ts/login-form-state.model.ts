export interface ILoginFormState {
    value: { email: string, password: string };
    validity: { email: boolean, password: boolean };
}
