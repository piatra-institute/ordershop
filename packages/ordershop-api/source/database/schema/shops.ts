import {
    sqliteTable,
    text,
    uniqueIndex,
} from 'drizzle-orm/sqlite-core';



export const shops = sqliteTable(
    'shops',
    {
        id: text('id').notNull().primaryKey(),
        createdAt: text('created_at').notNull(),
        ownedBy: text('owned_by').notNull(),
        name: text('name').notNull(),
        url: text('url').notNull(),
        picture: text('picture').notNull(),
    },
    (shops) => ({
        urlIdx: uniqueIndex('urlIdx').on(shops.url),
    }),
);
