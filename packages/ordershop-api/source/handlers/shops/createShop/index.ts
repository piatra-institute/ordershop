import type {
    Request,
    Response,
} from 'express';

import { v4 as uuid } from 'uuid';

import database from '@/source/database';
import {
    shops,
} from '@/source/database/schema/shops';

import {
    handlerWithUser,
} from '@/source/logic/handlers';



export default async function handler(
    request: Request,
    response: Response,
) {
    return await handlerWithUser(
        request,
        response,
        async (
            _tokensUser,
            databaseUser,
        ) => {
            const {
                name,
                picture,
                url,
            } = request.body;

            await database.insert(shops).values({
                id: uuid(),
                createdAt: Date.now().toString(),
                name,
                ownedBy: databaseUser.id,
                picture,
                url,
            });
        },
    );
}
