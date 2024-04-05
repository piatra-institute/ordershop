import { cookies } from 'next/headers';

import {
    ENVIRONMENT,
} from '@/data';



const getCookie = async (name: string) => {
    return cookies().get(name)?.value ?? '';
}

const getUser = async () => {
    try {
        const cookie_OSHP_AT = await getCookie('OSHP_AT');
        const cookie_OSHP_RT = await getCookie('OSHP_RT');

        if (!cookie_OSHP_AT || !cookie_OSHP_RT) {
            return;
        }

        const response = await fetch(
            ENVIRONMENT.API_DOMAIN + '/get-user',
            {
                method: 'POST',
                headers: {
                    Cookie: `OSHP_AT=${cookie_OSHP_AT};OSHP_RT=${cookie_OSHP_RT};`
                },
            },
        ).catch((error) => {
            console.error(error);
        });
        if (!response) {
            return;
        }
        const request = await response.json();
        if (!request || !request.status) {
            return;
        }

        return request.data;
    } catch (error) {
        return;
    }
}


export default getUser;
