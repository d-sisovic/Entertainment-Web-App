import auth, { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { Firebase } from "../ts/enums/firebase.enum";
import { IUserLoginRegister } from "../ts/models/user-login-register.model";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (params: IUserLoginRegister) => {
    try {
        const { email, password } = params;
        const { user } = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, Firebase.USERS, user.uid), { email });
    } catch {
        throw new Error();
    }
};

export const checkIfEmailIsTaken = async (email: string) => {
    try {
        const result = await fetchSignInMethodsForEmail(auth, email);

        return !!result.length;
    } catch {
        return true;
    }
};

export const loginUser = async ({ email, password }: IUserLoginRegister) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch {
        throw new Error();
    }
};