import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    role: string
}