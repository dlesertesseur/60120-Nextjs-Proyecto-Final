import { BASE_URL } from "./config";

export const getCategories = async () => {
    const url = `${BASE_URL}/api/categories`;
    const ret = await fetch(url, { cache: 'no-store' })
    const data = await ret.json();
    return(data);
}