import "./App.scss";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return <>
    <Toaster toastOptions={{ position: "bottom-center" }} />

    <Outlet></Outlet>;
  </>;
}

export default App;
