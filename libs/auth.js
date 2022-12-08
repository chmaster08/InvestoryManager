import { IncomingMessage, OutgoingMessage } from 'http';
import { serialize } from 'cookie';
import Cookies, { CookieChangeOptions } from 'universal-cookie';

export const HasTokenInCookie = () =>
{
    const cookies = new Cookies();
    const token = cookies.get('ACCESS_TOKEN');
    console.log(token);
    if (token != null && token != undefined)
    {
        return true;
    }
    else
    {
        return false;
    }
}