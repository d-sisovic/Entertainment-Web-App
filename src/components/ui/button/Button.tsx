import { IButtonProps } from "./ts/button-props.model";

const Button = ({ label, disabled, handleButtonClick }: IButtonProps) => {
    const onButtonClick = () => {
        if (disabled) { return; }

        handleButtonClick();
    };

    return <button className="bg-red-c text-center w-full py-[0.906rem] rounded-[0.375rem]
     text-white-c text-[0.938rem]/[1.188rem] disabled:bg-white-c disabled:text-semi-dark-blue-c
     hover:bg-white-c hover:text-semi-dark-blue-c" disabled={disabled} onClick={onButtonClick}>
        {label}
    </button>;
};

export default Button;