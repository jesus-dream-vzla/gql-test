import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import AppService from './app.service';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import UserEntity from './users/database/user.entity'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "jesus",
      password: "pacheco",
      database: "dreamcode",
      entities: [UserEntity],
      synchronize: true
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    }),
    UserModule
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}
