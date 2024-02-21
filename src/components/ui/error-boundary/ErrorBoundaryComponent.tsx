import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../ts/enums/route-paths.enum";

const ErrorBoundaryComponent = () => {
    const navigate = useNavigate();
    const onGoBack = () => navigate(`/${RoutePaths.HOME}`);

    return <div className="flex flex-col h-screen justify-center items-center mx-8 text-center">
        <h1 className="text-[1.25rem]/[1.563rem] text-white-c my-6">Unexpected Error</h1>
        <h3 className="text-[1rem]/[1.3rem] text-white-c my-3">Please contact developer at: <b>d.sisovic777@gmail.com</b></h3>

        <Button label="Go home" handleButtonClick={onGoBack}></Button>
    </div>;
};

export default ErrorBoundaryComponent;