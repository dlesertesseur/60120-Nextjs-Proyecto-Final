export const getCategories = async () => {
    const url = `/api/purchases`;
    const ret = await fetch(url, { cache: 'no-store' })
    const data = await ret.json();
    return(data);
}