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
            const {
                orderID,
            } = request.body;

            const order = await database.query.orders.findFirst({
                where: eq(orders.id, orderID),
            });
            if (!order) {
                response.status(404).json({
                    status: false,
                });
                return;
            }

            if (order.shopperID !== databaseUser.id) {
                response.status(404).json({
                    status: false,
                });
                return;
            }

            response.json({
                status: true,
                data: order,
            });
        },
    );
}
