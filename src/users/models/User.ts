export default class User {
    name: String
    role: String

    constructor(name: String, role: String){
        this.name = name
        this.role = role
    }

    // public update(role: String): this {
    //     this.role = role
    //     return this
    // }
}