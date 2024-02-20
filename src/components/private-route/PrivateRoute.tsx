import { useUserStore } from "../../store";
import { Navigate } from "react-router-dom";
import Loading from "../ui/loading/Loading";
import { RoutePaths } from "../../ts/enums/route-paths.enum";

const PrivateRoute = ({ component }: { component: JSX.Element }) => {
    const { user, loading } = useUserStore();

    if (loading) { return <Loading />; }

    return user ? component : <Navigate to={`/${RoutePaths.LOGIN}`} replace />
  };
  
  export default PrivateRoute;