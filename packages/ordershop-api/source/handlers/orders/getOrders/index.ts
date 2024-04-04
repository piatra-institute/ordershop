import type {
    Request,
    Response,
} from 'express';

import {
    eq,
} from 'drizzle-orm';

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
            _tokensUser,
            databaseUser,
        ) => {
            const userOrders = await database.query.orders.findMany({
                where: eq(orders.shopperID, databaseUser.id),
            });

            response.json({
                status: true,
                data: userOrders,
            });
        },
    );
}
