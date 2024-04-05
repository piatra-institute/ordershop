'use client';

import {
    useState,
    useEffect,
} from 'react';

import Image from 'next/image';

import {
    User,
} from '@/data';

import Menu from '@/components/Menu';

import {
    UserContext,
} from '@/logic/context';

import useStore from '@/store';



export default function Home({
    user,
} : {
    user: User | null,
}) {
    // #region state
    const [
        contextUser,
        setContextUser,
    ] = useState(user);


    const {
        user: storeUser,
        setUser,
    } = useStore();
    // #endregion state


    // #region effects
    /** Load user */
    useEffect(() => {
        setUser(user);
    }, [
        user,
        setUser,
    ]);

    useEffect(() => {
        setContextUser(storeUser);
    }, [
        storeUser,
    ]);
    // #endregion effects


    // #region render
    return (
        <UserContext.Provider
            value={{
                user: contextUser,
                logoutContextUser: () => {
                    setContextUser(null);
                },
            }}
        >
            <Menu />

            <div
                className="grid place-items-center h-screen"
            >
                <Image
                    src="/ordershop-logo.png"
                    alt="ordershop logo"
                    width={400}
                    height={400}
                    priority={true}
                />

                <div>
                    register a shop to receive orders
                </div>

                <div>
                    request orders from a shop
                </div>
            </div>
        </UserContext.Provider>
    );
    // #endregion render
}
