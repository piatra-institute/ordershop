'use client';

import Subtitle from '@/components/Subtitle';
import MenuBack from '@/components/MenuBack';



export default function Shops({
    back,
} : {
    back: () => void;
}) {
    return (
        <div>
            <Subtitle
                text="shops"
                centered={true}
            />

            <MenuBack
                back={back}
                bottomSpace={true}
            />
        </div>
    );
}
