
export const HasTokenInCookie = (store) =>
{
    const token = store.app.$cookies.get('ACCESS_TOKEN');
    console.log("Token in Cokkies : "+token);
    if (token != null && token != undefined && token != "")
    {
        store.commit("auth/setToken", token);
        return true;
    }
    else
    {
        return false;
    }
}