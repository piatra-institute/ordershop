import {
    sqliteTable,
    text,
    index,
} from 'drizzle-orm/sqlite-core';



export const orders = sqliteTable(
    'orders',
    {
        id: text('id').notNull().primaryKey(),
        createdAt: text('created_at').notNull(),
        forShop: text('for_shop').notNull(),
        shopperID: text('shopper_id').notNull(),
        shopperData: text('shopper_data').notNull(),
        items: text('items').notNull(),
    },
    (orders) => ({
        shopperIDIdx: index('shopperIDIdx').on(orders.shopperID),
        forShopIdx: index('forShopIdx').on(orders.forShop),
    }),
);
