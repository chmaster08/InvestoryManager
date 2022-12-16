import {HasTokenInCookie, IsValidToken} from '@/libs/auth';
export default function ({redirect, store, route})
{
    console.log('middle ware called');
    if (!HasTokenInCookie(store) && route.path != '/login')
    {
        console.log('redirect to login page');
        redirect("/login");
    }
}