import { create } from "zustand";
import { IUser } from "./ts/models/user.model";
import { IUserStore } from "./ts/models/user-store.model";

export const useUserStore = create<IUserStore>(set => ({
    user: null,
    loading: true,
    logoutUser: () => set({}, true),
    setUser: (user: IUser | null) => set({ user, loading: false })
}));
