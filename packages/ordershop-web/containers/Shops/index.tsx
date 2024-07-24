'use client';

import { useRouter } from 'next/navigation';

import Subtitle from '@/components/Subtitle';
import MenuBack from '@/components/MenuBack';
import LinkButton from '@/components/LinkButton';



export default function Shops({
    back,
} : {
    back: () => void;
}) {
    const router = useRouter();

    return (
        <div>
            <Subtitle
                text="shops"
                centered={true}
            />

            <LinkButton
                text="register shop"
                onClick={() => {
                    router.push('/shops/register');
                }}
            />

            <MenuBack
                back={back}
                bottomSpace={true}
            />
        </div>
    );
}
