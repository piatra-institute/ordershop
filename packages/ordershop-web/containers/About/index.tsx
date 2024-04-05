'use client';

import Subtitle from '@/components/Subtitle';
import MenuBack from '@/components/MenuBack';



export default function About({
    back,
} : {
    back: () => void;
}) {
    return (
        <div
            className="scrollable-view max-w-xl h-full overflow-scroll flex flex-col md:justify-center py-2 px-4 text-left"
        >
            <Subtitle
                text="about ordershop.io"
                centered={true}
            />

            <div
                className="text-sm md:text-base"
            >
                <p>
                    ordershop.io is an <a
                        href="https://github.com/piatra-institute/ordershop/tree/main"
                        target="_blank"
                    >
                        open source
                    </a> project that provides a simple and easy-to-use platform for small workshops to manage their orders.
                </p>
            </div>

            <MenuBack
                back={back}
                bottomSpace={true}
            />
        </div>
    );
}
