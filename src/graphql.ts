
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface IMutation {
    createUser(name: string, role: string): User | Promise<User>;
    updateUser(name: string, role: string): User | Promise<User>;
    deleteUser(name: string): string | Promise<string>;
}

export interface IQuery {
    findUser(name: string): User | Promise<User>;
    listUsers(last?: number): User[] | Promise<User[]>;
}

export interface User {
    name: string;
    role: string;
}
