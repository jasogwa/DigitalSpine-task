import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('product_price', table => {
        table.increments('id').primary();
        table.integer('product_id').unsigned().index().references('id').inTable('products');
        table.decimal('value').notNullable();
        table.string('currency');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('product_price');
}