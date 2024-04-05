'use client';

import Subtitle from '@/components/Subtitle';
import MenuBack from '@/components/MenuBack';



export default function Orders({
    back,
} : {
    back: () => void;
}) {
    return (
        <div>
            <Subtitle
                text="orders"
                centered={true}
            />

            <MenuBack
                back={back}
                bottomSpace={true}
            />
        </div>
    );
}
