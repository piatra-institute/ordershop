import type {
    Request,
    Response,
} from 'express';

import { v4 as uuid } from 'uuid';

import database from '@/source/database';
import {
    orders,
} from '@/source/database/schema/orders';

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
            tokensUser,
            databaseUser,
        ) => {
            const {
                forShop,
                shopperData,
                items,
            } = request.body;

            await database.insert(orders).values({
                id: uuid(),
                createdAt: Date.now().toString(),
                forShop,
                shopperID: databaseUser.id,
                shopperData,
                items,
            });
        },
    );
}
