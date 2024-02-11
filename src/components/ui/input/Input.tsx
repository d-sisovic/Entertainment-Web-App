import { FormEvent, useState } from "react";
import { IInputProps } from "./ts/input-props.model";

const isFieldValid = (value: string) => value.trim() !== '';

const Input = ({ name, type = 'text', placeholder, handleInputChange }: IInputProps) => {
    const [haveError, setErrorState] = useState<boolean>(false);

    const onValueChange = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;
        const isValid = isFieldValid(value);

        setErrorState(!isValid);
        handleInputChange(name, value, isValid);
    };

    return <div className="relative">
        <input type={type} name={name} placeholder={placeholder} onInput={event => onValueChange(event)}
            className={`caret-red-c w-full text-[0.938rem]/[1.188rem] bg-transparent placeholder-white-c placeholder-opacity-50
            text-white-c px-4 pb-[1.125rem] outline-none border-b-[1px] border-solid border-greyish-blue-c focus:border-white-c 
            ${haveError ? 'input--error pr-[7rem]' : ''}`} />

        {haveError && <span className="text-red-c text-[0.813rem]/[1rem] absolute right-[1.063rem] top-[2px]">Can't be empty</span>}
    </div>;
};

export default Input;
