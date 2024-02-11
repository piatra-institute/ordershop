import {
    sqliteTable,
    text,
    integer,
    uniqueIndex,
} from 'drizzle-orm/sqlite-core';



export const users = sqliteTable(
    'users',
    {
        id: text('id').notNull().primaryKey(),
        createdAt: text('created_at').notNull(),
        email: text('email').notNull(),
        name: text('name').notNull(),
        picture: text('picture').notNull(),
        payments: text('payments').notNull(),
        shops: integer('shops').notNull(),
    },
    (users) => ({
        emailIdx: uniqueIndex('emailIdx').on(users.email),
    }),
);
