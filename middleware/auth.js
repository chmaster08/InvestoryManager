export default function ({redirect, store, route})
{
    const isLogined = store.getters["auth/isLogined"];
    const token = store.getters["auth/dispToken"];
    console.log(token);
    if (!isLogined && route.path !== "/login")
    {
        console.log("redirected");
        redirect("/login");
    }
}