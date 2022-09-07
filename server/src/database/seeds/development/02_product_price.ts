import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("product_price").del();

    // Inserts seed entries
    await knex("product_price").insert([
        {  
            product_id: 1,
            value: 2399,
            currency: "EURO"
        },
        { 
            product_id: 2,
            value: 97,
            currency: "EURO"
        },
        { 
            product_id: 3,
            value: 1449,
            currency: "EURO"
        },
        { 
            product_id: 4,
            value: 300,
            currency: "EURO"
        },
        { 
            product_id: 5,
            value: 769,
            currency: "EURO"
        },
        { 
            product_id: 6,
            value: 305,
            currency: "EURO"
        },
        { 
            product_id: 7,
            value: 18,
            currency: "EURO"
        },
        { 
            product_id: 8,
            value: 60,
            currency: "EURO"
        },
        { 
            product_id: 9,
            value: 1945,
            currency: "EURO"
        },
        { 
            product_id: 10,
            value: 107,
            currency: "EURO"
        }
    ]);
};