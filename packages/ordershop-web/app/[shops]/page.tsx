'use client';

import {
    useState,
    useEffect,
} from 'react';

import Image from 'next/image';
import dynamic from 'next/dynamic';



const DXFViewer = dynamic(() => import('./../../components/DXFViewer'), {
    ssr: false,
});


async function fetchFileAsBlob(
    url: string,
) {
    try {
        const response = await fetch(url);
        const data = await response.blob();
        return data;
    } catch (error) {
        console.error('Error fetching file:', error);
        throw error;
    }
}

async function generateBlobUrl(
    url: string,
) {
    try {
        const blob = await fetchFileAsBlob(url);
        const objectURL = URL.createObjectURL(blob);

        return objectURL;
    } catch (error) {
        console.error('Error generating Blob URL:', error);
    }
}


export default function Shops() {
    const [blobUrl, setBlobUrl] = useState('');


    useEffect(() => {
        const load = async () => {
            const localUrl = '/test.dxf';

            const blobUrl = await generateBlobUrl(localUrl);
            if (!blobUrl) {
                return;
            }

            setBlobUrl(blobUrl);
        }

        load();

        return () => {
            if (blobUrl) {
                URL.revokeObjectURL(blobUrl);
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
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
                shops
            </div>

            <DXFViewer
                url={blobUrl}
            />
        </div>
    );
}
