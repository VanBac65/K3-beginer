import { footerFake } from "../mock/footer"

export const getFooter = () => {
    return new Promise (resolve => resolve(footerFake))
}