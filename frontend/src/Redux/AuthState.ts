import { createStore } from "redux";
import jwtDecode from "jwt-decode";
import UserModel from "../Models/UserModel";

// 1. Auth State
export class AuthState {
    public token:string = null
    public user:UserModel = null

    public constructor() {
        this.token = sessionStorage.getItem("token")
        if(this.token) {
            // const container: {user: UserModel} = jwtDecode(this.token)
            // this.user = container.user
        }
    }

}

// 2. Auth Action Type
export enum AuthActionType {
    Register,
    Login,
    Logout
}

// 3. Auth Action
export interface AuthAction {
    type: AuthActionType
    payload?: string
}

// 4. Auth Reducer
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    const newState = {...currentState}

    switch (action.type) {

        case AuthActionType.Register:
            newState.token = action.payload;
            // const container: { user: UserModel } = jwtDecode(newState.token); // { user: { id: 1, firstName: "Moishe", ... } }
            // newState.user = container.user;
            sessionStorage.setItem("token", newState.token);
            alert("k")
    }

    return newState

}

// 5. Store Object
export const authStore = createStore(authReducer)