'use server';

import Home from '@/containers/Home';

import getUser from '@/logic/getUser';



export default async function Index() {
    const user = await getUser();

    return (
        <Home
            user={user}
        />
    );
}
