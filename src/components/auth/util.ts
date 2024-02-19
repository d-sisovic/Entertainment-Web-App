import { FormState } from "./ts/types/form-state.type";

export const getNewFormState = <T>(previous: FormState<T>, key: string, value: string, isValid: boolean) => ({
    ...previous,
    value: { ...previous.value, [key]: value },
    validity: { ...previous.validity, [key]: isValid }
});

export const updatePasswordFormState = <T>(previous: FormState<T>, key: string, value: string) => ({
    ...previous,
    value: { ...previous.value, [key]: value },
    validity: { ...previous.validity, password: true, repeatPassword: true }
});

export const isFormInvalid = (formState: Record<string, boolean>) => Object
    .values(formState)
    .some(valid => !valid);