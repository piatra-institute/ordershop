export const ENVIRONMENT = {
    IN_PRODUCTION: process.env.NEXT_PUBLIC_IN_PRODUCTION || '',
    X_DOMAIN: process.env.NEXT_PUBLIC_X_DOMAIN || '',
    AI_DOMAIN: process.env.NEXT_PUBLIC_AI_DOMAIN || '',
    API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN || '',
    STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY || '',
    GOOGLE_LOGIN: process.env.NEXT_PUBLIC_GOOGLE_LOGIN || '',
};


export interface Payment {
    productType: string;
    session: string;
}


export interface User {
    email: string;
    name: string;
    picture: string;
    payments: Payment[];
}
