import { navFake } from "../mock/nav"

export const getNav = () => {
    return new Promise((resolve) => {
         return resolve(navFake)
    })
}