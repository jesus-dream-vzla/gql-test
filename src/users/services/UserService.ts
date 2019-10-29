import { Injectable } from '@nestjs/common';
import User from '../models/User'
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from '../database/user.entity'
import { Repository } from 'typeorm';

@Injectable()
export default class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    getUsers(last: number): Promise<UserEntity[]> {
        return this.userRepository.find()
    }

    findById(id: number): Promise<UserEntity> {
        return this.userRepository.findOne(id)
    }

    createUser(user: UserEntity): Promise<UserEntity> {
        return this.userRepository.save(user)
    }

    async updateUser(id: number, name: string, role: string): Promise<UserEntity> {
        let user = await this.userRepository.findOneOrFail(id)
        user.name = name
        user.role = role
        return await this.userRepository.save(user)
    }

    async deleteUser(id: number): Promise<User> {
        let user = await this.userRepository.findOneOrFail(id)
        return await this.userRepository.remove(user)
    }
}
