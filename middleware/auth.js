import {HasTokenInCookie, IsValidToken} from '@/libs/auth';
export default function ({redirect, store, route})
{
    if (!HasTokenInCookie())
    {
        redirect("/login");
    }
}