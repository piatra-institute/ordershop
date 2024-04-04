import type {
    Request,
    Response,
} from 'express';

import {
    eq,
} from 'drizzle-orm';

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
            const userShops = await database.query.shops.findMany({
                where: eq(shops.ownedBy, databaseUser.id),
            });

            response.json({
                status: true,
                data: userShops,
            });
        },
    );
}
