import { IUser } from "./user.model";

export interface IUserStore {
    loading: boolean;
    user: IUser | null;

    logoutUser: () => void;
    setUser: (user: IUser | null) => void;
}
