import fsPromises from "fs/promises";
import UserModel from "../4-models/user-model";

const usersFilePath = "./src/1-assets/users.json";

async function getAllUsers(): Promise<UserModel[]> {
    const content = await fsPromises.readFile(usersFilePath, "utf-8");
    const users = JSON.parse(content);
    return users;
}

async function saveAllUsers(users: UserModel[]): Promise<void> {
    const content = JSON.stringify(users, null, 4); // 4 = number of spaces for each tab.
    await fsPromises.writeFile(usersFilePath, content);
}


export default {
    getAllUsers,
    saveAllUsers,
    
}
