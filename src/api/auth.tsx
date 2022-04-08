import instance from "./instance";
import { FormValues } from "../types/user"

export const signup = (user : FormValues ) => {
    const url = `/signup`;
    return instance.post(url,user)
}
export const signin = (user : FormValues ) => {
    const url = `/signin`;
    return instance.post(url,user)
}
export const listUser = () => {
    const url = `/users`;
    return instance.get(url);
}

export const removeUser = (id: number) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}