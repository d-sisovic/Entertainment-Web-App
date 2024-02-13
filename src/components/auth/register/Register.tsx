import toast from "react-hot-toast";
import Input from "../../ui/input/Input";
import { useMemo, useState } from "react";
import logo from "../../../assets/logo.svg";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { getNewFormState, isFormInvalid } from "../util";
import FormHeader from "../../ui/form-header/FormHeader";
import { registerUser } from "../../../utils/firebase-util";
import { RoutePaths } from "../../../ts/enums/route-paths.enum";
import { IRegisterFormState } from "./ts/register-form-state.model";

const initialFormState = {
    value: { email: "", password: "", repeatPassword: "" },
    validity: { email: false, password: false, repeatPassword: false }
};

const Register = () => {
    const { mutate: handleUserRegistration, isPending } = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            toast.success("User successfully registered.");
            navigate(`/${RoutePaths.LOGIN}`);
        },
        onError: () => {
            toast.error("User couldn't be registered. Please try again.");
        }
    });
    const navigate = useNavigate();
    const [formState, setFormState] = useState<IRegisterFormState>(initialFormState);

    const formInvalid = useMemo(() => isFormInvalid(formState), [formState]);

    const handleInputChange = (key: string, value: string, isValid: boolean) => {
        setFormState(previous => getNewFormState<IRegisterFormState>(previous, key, value, isValid));
    };

    const onLogin = () => navigate(`/${RoutePaths.LOGIN}`);

    const onFormSubmit = async () => {
        const { email, password } = formState.value;

        handleUserRegistration({ email, password });
    };

    return <div className="px-6 pt-12">
        <img src={logo} alt="logo" className="mx-auto mb-[3.625rem]" />

        <div className="bg-semi-dark-blue-c w-[20.438rem] p-6 pt-6 pb-8 rounded-[0.625rem] mx-auto">
            <FormHeader label="Sign Up"></FormHeader>

            <div className='flex flex-col gap-[1.5rem] mb-[2.5rem]'>
                <Input name="email" placeholder="Email address" handleInputChange={handleInputChange} />

                <Input type="password" name="password" placeholder='Password' handleInputChange={handleInputChange} />

                <Input type="password" name="repeatPassword" placeholder='Repeat Password' handleInputChange={handleInputChange} />
            </div>

            <Button label="Create an account" disabled={formInvalid || isPending} handleButtonClick={onFormSubmit}></Button>

            <p className="mt-[1.5rem] text-center text-white-c text-[0.938rem]/[1.188rem]" onClick={onLogin}>
                Already have an account?
                <span className="text-red-c ml-[0.563rem]">Login</span>
            </p>
        </div>
    </div>;
};

export default Register;
