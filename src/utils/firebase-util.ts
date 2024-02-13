import auth, { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { Firebase } from "../ts/enums/firebase.enum";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { IRegisterUser } from "../ts/models/register-user.model";

export const registerUser = async (params: IRegisterUser) => {
    try {
        const { email, password } = params;
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
        await setDoc(doc(db, Firebase.USERS, user.uid), { email });
    } catch {
        throw new Error();
    }
};
