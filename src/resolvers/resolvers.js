let users = []

export default {
    Query: {
        listUsers: last => {
            return users
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
        }
    }
}