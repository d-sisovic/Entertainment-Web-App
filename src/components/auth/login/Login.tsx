import toast from "react-hot-toast";
import Input from "../../ui/input/Input";
import { useMemo, useState } from "react";
import logo from "../../../assets/logo.svg";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../utils/async-util";
import { useLogout } from "../../../hooks/use-logout";
import { getNewFormState, isFormInvalid } from "../util";
import FormHeader from "../../ui/form-header/FormHeader";
import { ILoginFormState } from "./ts/login-form-state.model";
import { RoutePaths } from "../../../ts/enums/route-paths.enum";

const initialFormState = {
    value: { email: "", password: "" },
    validity: { email: false, password: false }
};

const Login = () => {
    useLogout();

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

    const onFormSubmit = () => handleLogin({ ...formState.value });

    const onCreateAccont = () => navigate(`/${RoutePaths.REGISTER}`);

    const formInvalid = useMemo(() => isFormInvalid(formState.validity), [formState.validity]);

    return <div className="px-6 pt-12 tablet:pt-[5.5rem] desktop:pt-[4.906rem]">
        <img src={logo} alt="logo" className="mx-auto mb-[3.625rem] tablet:mb-[4.525rem] desktop:mb-[5.188rem]" data-testid="logo" />

        <div className="bg-semi-dark-blue-c w-[20.438rem] p-6 pt-6 pb-8 rounded-[0.625rem] mx-auto tablet:p-8 tablet:w-[25rem]">
            <FormHeader label="Login"></FormHeader>

            <div className="flex flex-col gap-6 mb-10">
                <Input name="email" placeholder="Email address" handleInputChange={handleInputChange} />

                <Input type="password" name="password" placeholder='Password' handleInputChange={handleInputChange} />
            </div>

            <Button label="Login to your account" disabled={formInvalid} handleButtonClick={onFormSubmit}></Button>

            <div className="text-center mt-6 text-white-c text-[0.938rem]/[1.188rem]">
                <p className="cursor-pointer inline-block" onClick={onCreateAccont}>
                    Don't have an account?
                    <span className="text-red-c ml-[0.563rem]">Sign Up</span>
                </p>
            </div>
        </div>
    </div>;
};

export default Login;

