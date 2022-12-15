
export const HasTokenInCookie = (store) =>
{
    const token = store.app.$cookies.get('ACCESS_TOKEN');
    console.log("Token in Cokkies : "+token);
    console.log(store);
    if (token != null && token != undefined)
    {
        store.commit("auth/setToken", token);
        return true;
    }
    else
    {
        return false;
    }
}