'use client';

import Menu from '@/components/Menu';

import Image from 'next/image';



export default function Home() {
    return (
        <>
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
        </>
    );
}
