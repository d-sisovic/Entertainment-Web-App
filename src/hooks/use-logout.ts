import auth from "../firebase";
import { useEffect } from "react";

export const useLogout = () => {
    useEffect(() => {
        (async () => await auth.signOut())();
    }, []); 
}