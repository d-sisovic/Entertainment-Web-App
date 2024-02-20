import "./App.scss";
import auth from "./firebase";
import { useEffect } from "react";
import { useUserStore } from "./store";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { IUser } from "./ts/models/user.model";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const setUser = useUserStore().setUser;

  useEffect(() => {
    const subscription = onAuthStateChanged(auth, user => {
      if (!user) {
        setUser(null);
        return;
      }

      const { displayName, email, photoURL } = user as IUser;

      setUser({ displayName, email, photoURL });
    });

    return () => { subscription(); };
  }, [setUser]);

  return <>
    <Toaster toastOptions={{ position: "bottom-center" }} />

    <Outlet></Outlet>;
  </>;
};

export default App;
