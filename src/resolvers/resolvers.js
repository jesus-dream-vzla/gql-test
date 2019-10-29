import mysql from 'mysql';

let users = []

export default {
    Query: {
        listUsers: async () => {
            return users
        },
        showUser: async (_, { name }) => {
            return users.find(user => user.name === name)
        }
    },
    Mutation: {
        createUser: async (_, user) => {
            console.log(user)
            users.push(user)
            return user
        },
        deleteUser: async (_, {name}) => {
            users = users.filter(user => user.name !== name)
            return name
        },
        updateUser: async (_, updatedUser) => {
            const index = users.findIndex(user => user.name === updatedUser.name)
            users[index] = updatedUser
            return updatedUser
        }
    }
}