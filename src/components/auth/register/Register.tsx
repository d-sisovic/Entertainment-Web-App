import toast from "react-hot-toast";
import Input from "../../ui/input/Input";
import logo from "../../../assets/logo.svg";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { IEmailTaken } from "./ts/email-taken.model";
import { useEffect, useMemo, useState } from "react";
import FormHeader from "../../ui/form-header/FormHeader";
import { RoutePaths } from "../../../ts/enums/route-paths.enum";
import { IRegisterFormState } from "./ts/register-form-state.model";
import { checkIfEmailIsTaken, registerUser } from "../../../utils/async-util";
import { getNewFormState, isFormInvalid, updatePasswordFormState } from "../util";

const initialFormState = {
    value: { email: "", password: "", repeatPassword: "" },
    validity: { email: false, password: false, repeatPassword: false }
};

const validatePasswordMessage = "Password must be the same as repeated password";
const validateRepeatPasswordMessage = "Repeated password must be the same as password";

const validateEmailValue = (value: string) => ({ required: value.trim() === "", customValidation: false });

const Register = () => {
    const { mutate: handleEmailTaken } = useMutation({
        mutationFn: checkIfEmailIsTaken,
        onSuccess: (emailTaken: boolean) => setEmailTaken(({ inUse: emailTaken, pending: false }))
    });

    const { mutate: handleUserRegistration, isPending: userRegistrationPending } = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            toast.success("User successfully registered.");
            navigate(`/${RoutePaths.LOGIN}`);
        },
        onError: () => toast.error("User couldn't be registered. Please try again.")
    });

    const navigate = useNavigate();

    const [formState, setFormState] = useState<IRegisterFormState>(initialFormState);
    const [emailTaken, setEmailTaken] = useState<IEmailTaken>({ inUse: false, pending: false });
    const formInvalid = useMemo(() => isFormInvalid(formState.validity), [formState.validity]);

    useEffect(() => {
        const value = formState.value.email;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) { return; }

        setEmailTaken(previous => ({ ...previous, pending: true }));

        (async () => handleEmailTaken(value))();
    }, [formState.value.email, handleEmailTaken]);

    const handleInputChange = (key: string, value: string, isValid: boolean) => {
        if (key.toLowerCase().includes("password") && isValid) {
            setFormState(previous => updatePasswordFormState(previous, key, value));
            return;
        }

        setFormState(previous => getNewFormState<IRegisterFormState>(previous, key, value, isValid));
    };

    const validatePasswordValue = (value: string, key: string) => {
        const required = value.trim() === "";
        const formStateKey = key === "password" ? "repeatPassword" : "password";
        const customValidation = value !== formState.value[formStateKey];

        return { required, customValidation };
    };

    const onLogin = () => navigate(`/${RoutePaths.LOGIN}`);

    const onFormSubmit = async () => {
        const { email, password } = formState.value;

        handleUserRegistration({ email, password });
    };

    return <div className="p-6 pt-12 tablet:pt-[5.5rem] desktop:pt-[4.906rem]">
        <img src={logo} alt="logo" className="mx-auto mb-[3.625rem] tablet:mb-[4.525rem] desktop:mb-[5.188rem]" data-testid="logo" />

        <div className="bg-semi-dark-blue-c w-[20.438rem] p-6 pt-6 pb-[1.625rem] rounded-[0.625rem] mx-auto tablet:p-8 tablet:w-[25rem]">
            <FormHeader label="Sign Up"></FormHeader>

            <div className="flex flex-col gap-6 mb-10 tablet:mb-6">
                <Input name="email" placeholder="Email address" formState={formState}
                    handleInputChange={handleInputChange} handleValidateValue={validateEmailValue} />

                {emailTaken.inUse && <span className="text-red-c text-[0.813rem]/[1rem]">Email is already used</span>}

                <Input type="password" name="password" placeholder="Password" formState={formState} validateValueMessage={validatePasswordMessage}
                    handleInputChange={handleInputChange} handleValidateValue={validatePasswordValue} />

                <Input type="password" name="repeatPassword" placeholder="Repeat Password" formState={formState} validateValueMessage={validateRepeatPasswordMessage}
                    handleInputChange={handleInputChange} handleValidateValue={validatePasswordValue} />
            </div>

            <Button label="Create an account" disabled={formInvalid || userRegistrationPending || emailTaken.inUse}
                handleButtonClick={onFormSubmit}></Button>

            <div className="text-center mt-6 text-white-c text-[0.938rem]/[1.188rem]">
                <p className="cursor-pointer inline-block" onClick={onLogin}>
                    Already have an account?
                    <span className="text-red-c ml-[0.563rem]">Login</span>
                </p>
            </div>
        </div>
    </div>;
};

export default Register;
