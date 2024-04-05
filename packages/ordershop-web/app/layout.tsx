import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { GoogleOAuthProvider } from '@react-oauth/google';

import './globals.css';

import {
    ENVIRONMENT,
} from '@/data';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ordershop',
    description: 'request and manage manufacturing orders',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning={true}
        >
            <body className={inter.className}>
                <GoogleOAuthProvider
                    clientId={ENVIRONMENT.GOOGLE_LOGIN}
                >
                    {children}
                </GoogleOAuthProvider>
            </body>
        </html>
    );
}
