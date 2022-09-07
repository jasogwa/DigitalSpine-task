import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('carts', table => {
        table.increments('id').primary();
        table.integer('product_id').unsigned().index().references('id').inTable('products');
        table.integer('user_id').unsigned().index().references('id').inTable('users');
        table.smallint('quantity').defaultTo(1);
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('carts');
}