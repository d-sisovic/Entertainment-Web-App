import { isFormInvalid } from "../../auth/util";
import { IInputProps } from "./ts/input-props.model";
import { IInputError } from "./ts/input-error.model";
import { FormEvent, useEffect, useState } from "react";

const initialState = { required: false, customValidation: false };

const isFieldValid = (state: IInputError) => Object
    .values(state)
    .every(validity => !validity);

const Input = ({ name, type = "text", placeholder, formState, validateValueMessage, handleValidateValue, handleInputChange }: IInputProps) => {
    const [errorState, setErrorState] = useState<IInputError>(initialState);

    const onInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;

        const formValidity = !handleValidateValue ? initialState : handleValidateValue(value, name);
        const isValid = isFieldValid(formValidity);

        setErrorState(formValidity);
        handleInputChange(name, value, isValid);
    };

    useEffect(() => {
        if (!formState || isFormInvalid(formState.validity)) { return; }

        setErrorState(initialState);
    }, [formState]);

    return <>
        <div className="relative leading-[0]">
            <input type={type} name={name} placeholder={placeholder} onInput={event => onInputChange(event)}
                className={`caret-red-c w-full text-[0.938rem]/[1.188rem] bg-transparent placeholder-white-c placeholder-opacity-50
            text-white-c px-4 pb-[1.125rem] outline-none border-b-[1px] border-solid border-greyish-blue-c focus:border-white-c 
            ${errorState.required ? "input--error pr-28" : ""}`} />

            {errorState.required && <span className="text-red-c text-[0.813rem]/[1rem] absolute right-[1.063rem] top-[2px]">Can't be empty</span>}
        </div>

        {errorState.customValidation && <span className="text-red-c text-[0.813rem]/[1rem]">{validateValueMessage}</span>}
    </>;
};

export default Input;
