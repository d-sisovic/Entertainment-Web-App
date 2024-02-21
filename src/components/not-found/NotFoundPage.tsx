import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../ts/enums/route-paths.enum";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const onGoBack = () => navigate(`/${RoutePaths.HOME}`);

    return <div className="flex flex-col h-screen justify-center items-center mx-8">
        <h1 className="text-[1.25rem]/[1.563rem] text-white-c my-6">Requested page wasn't found.</h1>

        <Button label="Go home" handleButtonClick={onGoBack}></Button>
    </div>;
};

export default NotFoundPage;
