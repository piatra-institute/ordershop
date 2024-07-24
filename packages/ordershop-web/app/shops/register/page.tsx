'use client';

import {
    useState,
} from 'react';

import Input from '@/components/Input';
import LinkButton from '@/components/LinkButton';



export default function RegisterPage() {
    const [
        url,
        setURL,
    ] = useState('');

    const [
        name,
        setName,
    ] = useState('');

    const [
        description,
        setDescription,
    ] = useState('');

    const [
        logo,
        setLogo,
    ] = useState('');

    const [
        address,
        setAddress,
    ] = useState('');

    const [
        services,
        setServices,
    ] = useState('');


    return (
        <div
            className="max-w-[600px] mx-auto my-8"
        >
            <h1
                className="text-2xl"
            >
                register new shop
            </h1>

            <Input
                text="URL"
                value={url}
                setValue={(value) => setURL(value)}
            />

            <Input
                text="Name"
                value={name}
                setValue={(value) => setName(value)}
            />

            <Input
                text="Description"
                value={description}
                setValue={(value) => setDescription(value)}
            />

            <Input
                text="Logo"
                value={logo}
                setValue={(value) => setLogo(value)}
            />

            <Input
                text="Address"
                value={address}
                setValue={(value) => setAddress(value)}
            />

            <Input
                text="Services"
                value={services}
                setValue={(value) => setServices(value)}
            />

            <LinkButton
                text="Register Shop"
                onClick={() => {}}
            />
        </div>
    );
}
