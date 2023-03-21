import axios from "axios";
import UserModel from "../Models/UserModel";
import {AuthActionType, authStore} from "../Redux/AuthState";

class UsersService {

    // Registering a new user
     public async getAllUsers():Promise<any> {
        
        const users = await axios.get("http://localhost:3001/home",{
            withCredentials: false
        })
        return users
        
    }

}

const usersService = new UsersService();

export default usersService;
