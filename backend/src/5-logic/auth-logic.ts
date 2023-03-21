import UserModel from "../4-models/user-model";
import fdb from "../2-utils/fdb";
import {ValidationErrorModel} from "../4-models/error-model";


async function register(user:UserModel): Promise<void> {

    // Validation

    // Get all users (only now, when working with DB we won't get all users):
    const users = await fdb.getAllUsers();

    // If username taken:
    if (users.some(u => u.username === user.username)) {
        throw new ValidationErrorModel("Username already taken");
    }

    // Find next id:
    user.id = users[users.length - 1].id + 1;

    // Add new user to collection:
    users.push(user);

    // Save users back to file:
    await fdb.saveAllUsers(users);

}

export default {
    register
}