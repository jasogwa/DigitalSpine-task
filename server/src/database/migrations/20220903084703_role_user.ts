import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('role_user', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().index().references('id').inTable('users').defaultTo(1);
        table.integer('role_id').unsigned().index().references('id').inTable('roles');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('role_user');
}