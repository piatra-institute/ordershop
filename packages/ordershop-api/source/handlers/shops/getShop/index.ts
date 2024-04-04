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
            const {
                orderID,
            } = request.body;

            const shop = await database.query.shops.findFirst({
                where: eq(shops.id, orderID),
            });
            if (!shop) {
                response.status(404).json({
                    status: false,
                });
                return;
            }

            if (shop.ownedBy !== databaseUser.id) {
                response.status(404).json({
                    status: false,
                });
                return;
            }

            response.json({
                status: true,
                data: shop,
            });
        },
    );
}
