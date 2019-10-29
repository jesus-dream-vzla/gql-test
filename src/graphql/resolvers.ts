import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import User from '../users/models/User'
import UserService from '../users/services/UserService'
import UserEntity from '../users/database/user.entity'

@Resolver('User')
export default class UserResolver {
    constructor(
        private readonly userService: UserService
    ){}

    @Query()
    listUsers(@Args('last') last: number): Promise<User[]> {
        return this.userService.getUsers(last)
    }
    
    @Query()
    findById(@Args('id') id: number): Promise<User> {
        return this.userService.findById(id)
    }
    
    @Mutation()
    createUser(
        @Args('name') name: string,
        @Args('role') role: string
    ): Promise<User> {
        let user = new UserEntity()
        user.name = name
        user.role = role
        return this.userService.createUser(user)
    }

    @Mutation()
    updateUser(
        @Args('id') id: number,
        @Args('name') name: string,
        @Args('role') role: string
    ): Promise<User> {
        return this.userService.updateUser(id, name, role)
    }

    @Mutation()
    async deleteUser(@Args('id') id: number): Promise<Number> {
        await this.userService.deleteUser(id)
        return id
    }
}