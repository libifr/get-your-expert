import UserModel from "../Models/UserModel";
import {AuthActionType, authStore} from "../Redux/AuthState";

class AuthService {

    // Registering a new user
    public register(user:UserModel):void {

        // axios call
        const token = "ABC"
        // redux update
        authStore.dispatch({type:AuthActionType.Register,payload:token})

    }

}

const authService = new AuthService();

export default authService;
