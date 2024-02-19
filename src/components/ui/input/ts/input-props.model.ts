import { IInputError } from "./input-error.model";
import { IRegisterFormState } from "../../../auth/register/ts/register-form-state.model";

export interface IInputProps {
    name: string;
    type?: string;
    placeholder: string;
    formState?: IRegisterFormState;
    validateValueMessage?: string;

    handleValidateValue?: (value: string, key: string) => IInputError;
    handleInputChange: (key: string, value: string, isValid: boolean) => void;
}
