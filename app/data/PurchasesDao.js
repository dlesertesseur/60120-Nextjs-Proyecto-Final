import { config } from "../config";

export const getCategories = async () => {
    const url = `${config.APP_DOMAIN}/api/purchases`;
    const ret = await fetch(url, { cache: 'no-store' })
    const data = await ret.json();
    return(data);
}