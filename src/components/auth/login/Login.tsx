import toast from "react-hot-toast";
import Input from "../../ui/input/Input";
import { useMemo, useState } from "react";
import logo from "../../../assets/logo.svg";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../utils/firebase-util";
import { getNewFormState, isFormInvalid } from "../util";
import FormHeader from "../../ui/form-header/FormHeader";
import { ILoginFormState } from "./ts/login-form-state.model";
import { RoutePaths } from "../../../ts/enums/route-paths.enum";

const initialFormState = {
    value: { email: "", password: "" },
    validity: { email: false, password: false }
};

const Login = () => {
    const { mutate: handleLogin } = useMutation({
        mutationFn: loginUser,
        onSuccess: () => navigate(`/${RoutePaths.HOME}`),
        onError: () => toast.error("Incorrect email/password combination. Please try again.")
    });

    const navigate = useNavigate();
    const [formState, setFormState] = useState<ILoginFormState>(initialFormState);

    const handleInputChange = (key: string, value: string, isValid: boolean) => {
        setFormState(previous => getNewFormState<ILoginFormState>(previous, key, value, isValid));
    };

    const onCreateAccont = () => navigate(`/${RoutePaths.REGISTER}`);

    const onFormSubmit = () => handleLogin({ ...formState.value });

    const formInvalid = useMemo(() => isFormInvalid(formState.validity), [formState.validity]);

    return <div className="px-6 pt-12">
        <img src={logo} alt="logo" className="mx-auto mb-[3.625rem]" />

        <div className="bg-semi-dark-blue-c w-[20.438rem] p-6 pt-6 pb-8 rounded-[0.625rem] mx-auto">
            <FormHeader label="Login"></FormHeader>

            <div className='flex flex-col gap-[1.5rem] mb-[2.5rem]'>
                <Input name="email" placeholder="Email address" handleInputChange={handleInputChange} />

                <Input type="password" name="password" placeholder='Password' handleInputChange={handleInputChange} />
            </div>

            <Button label="Login to your account" disabled={formInvalid} handleButtonClick={onFormSubmit}></Button>

            <p className="mt-[1.5rem] text-center text-white-c text-[0.938rem]/[1.188rem]" onClick={onCreateAccont}>
                Don't have an account?
                <span className="text-red-c ml-[0.563rem]">Sign Up</span>
            </p>
        </div>
    </div>;
};

export default Login;

