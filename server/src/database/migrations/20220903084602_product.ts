import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.text('display_image').notNullable();
        table.string('brand').notNullable();
        table.string('category').notNullable();
        table.boolean('available');
        table.boolean('is_best_seller');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products');
}