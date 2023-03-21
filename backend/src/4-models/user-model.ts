
class UserModel {
    public id:number
    public name: string
    public username: string
    public email: string
    public password: string
    public expert: string

    public constructor(user:UserModel) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.username = user.username
        this.password = user.password
        this.expert = user.expert

    }
}
export default UserModel