'use client';

import Subtitle from '@/components/Subtitle';
import MenuBack from '@/components/MenuBack';



export default function Settings({
    back,
} : {
    back: () => void;
}) {
    return (
        <div>
            <Subtitle
                text="settings"
                centered={true}
            />

            <MenuBack
                back={back}
                bottomSpace={true}
            />
        </div>
    );
}
