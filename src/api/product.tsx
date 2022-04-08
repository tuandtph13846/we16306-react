import { ProductType } from "../types/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const userInfor = isAuthenticate();

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}

export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType) => {
    const url = `/products/${userInfor?.user?._id}`;
return instance.post(url, product, { headers: {'Authorization': `Bearer ${userInfor?.token}` }});
}
export const update = (product: ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}
export const read = (id: number | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}