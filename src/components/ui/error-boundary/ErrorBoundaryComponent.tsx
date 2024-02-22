import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../ts/enums/route-paths.enum";

const ErrorBoundaryComponent = () => {
    const navigate = useNavigate();
    const onGoBack = () => navigate(`/${RoutePaths.HOME}`);

    return <div className="flex flex-col h-screen justify-center items-center text-center mx-4">
    <h1 className="text-[1.25rem]/[1.563rem] text-white-c my-6 tablet:text-[2rem]/[2.5rem]">Unexpected Error</h1>
    <h3 className="text-[1rem]/[1.3rem] text-white-c my-3 tablet:text-[2rem]/[2.5rem]">Please contact developer at: <b>d.sisovic777@gmail.com</b></h3>
    
    <div className="max-w-60 w-full mt-6">
                <Button label="Go home" handleButtonClick={onGoBack}></Button>
            </div>
    </div>;
};

export default ErrorBoundaryComponent;