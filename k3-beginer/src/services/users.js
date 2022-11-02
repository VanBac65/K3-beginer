import { usersFake } from "../mock/users"

export const getUsers = () => {
    return new Promise((resolve) => {
        return resolve(usersFake)
    })
}