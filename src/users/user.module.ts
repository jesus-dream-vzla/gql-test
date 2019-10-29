import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import UserResolver from '../graphql/resolvers';
import UserService from './services/UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './database/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [UserService, UserResolver]
})
export class UserModule {}