import Input from '../../ui/input/Input';
import { useMemo, useState } from 'react';
import logo from '../../../assets/logo.svg';
import Button from '../../ui/button/Button';
import { useNavigate } from 'react-router-dom';
import { IFormState } from './ts/form-state.model';
import { RoutePaths } from '../../../ts/enums/route-paths.enum';

const initialFormState = {
    value: { email: '', password: '' },
    validity: { email: false, password: false }
};

const Login = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState<IFormState>(initialFormState);

    // Sets form value and validity
    const handleInputChange = (key: string, value: string, isValid: boolean) => {
        setFormState(previous => ({
            ...previous,
            value: { ...previous.value, [key]: value },
            validity: { ...previous.validity, [key]: isValid }
        }));
    };

    const onCreateAccont = () => navigate(`/${RoutePaths.REGISTER}`);

    const onFormSubmit = () => {
        console.log("ff");
    };

    const isFormInvalid = useMemo(() => Object
        .values(formState.validity)
        .some(valid => !valid), [formState.validity]);

    return <div className="px-6 pt-12">
        <img src={logo} alt="logo" className="mx-auto mb-[3.625rem]" />

        <div className="bg-semi-dark-blue-c w-[20.438rem] p-6 pt-6 pb-8 rounded-[0.625rem]">
            <h1 className="text-[2rem]/[2.5rem] text-white-c mb-[4rem]">Login</h1>

            <div className='flex flex-col gap-[1.5rem] mb-[2.5rem]'>
                <Input name="email" placeholder="Email address" handleInputChange={handleInputChange} />

                <Input type="password" name="password" placeholder='Password' handleInputChange={handleInputChange} />
            </div>

            <Button label="Login to your account" disabled={isFormInvalid} handleButtonClick={onFormSubmit}></Button>

            <p className="mt-[1.5rem] text-center text-white-c text-[0.938rem]/[1.188rem]" onClick={onCreateAccont}>
                Don't have an account?
                <span className="text-red-c"> Sign Up</span>
            </p>
        </div>
    </div>;
};

export default Login;

