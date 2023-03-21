import fdb from "../2-utils/fdb";
import UserModel from "../4-models/user-model";



async function getAllUsers(): Promise<any> {
    const users = await fdb.getAllUsers()
    return users
}

export default {
    getAllUsers
}