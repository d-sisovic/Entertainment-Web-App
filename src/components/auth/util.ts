import { FormState } from "./ts/types/form-state.type";

export const getNewFormState = <T>(previous: FormState<T>, key: string, value: string, isValid: boolean) => ({
    ...previous,
    value: { ...previous.value, [key]: value },
    validity: { ...previous.validity, [key]: isValid }
});

export const isFormInvalid = <T>(formState: FormState<T>) => Object
    .values(formState.validity)
    .some(valid => !valid);