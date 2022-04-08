import { CateType } from "../types/category";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const userInfor = isAuthenticate();

export const listCate = () => {
    const url = `/categories`;
    return instance.get(url);
}

export const removeCate = (id: number) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}
export const addCate = (category: CateType) => {
    const url = `/categories/${userInfor?.user?._id}`;
return instance.post(url, category, { headers: {'Authorization': `Bearer ${userInfor?.token}` }});
}
export const updateCate = (category: CateType) => {
    const url = `/categories/${category._id}`;
    return instance.put(url, category);
}
export const readCate = (id: string | undefined) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}