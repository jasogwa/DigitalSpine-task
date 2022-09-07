import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("product_tag").del();

    // Inserts seed entries
    await knex("product_tag").insert([
        { 
            product_id: 1, 
            tag: "nvidia" 
        },
        { 
            product_id: 1, 
            tag: "graphics card" 
        },
        { 
            product_id: 1, 
            tag: "gaming" 
        },
        { 
            product_id: 2, 
            tag: "logitech" 
        },
        { 
            product_id: 2, 
            tag: "mouse" 
        },
        { 
            product_id: 2, 
            tag: "wireless" 
        },
        { 
            product_id: 2, 
            tag: "bluetooth" 
        },
        { 
            product_id: 3, 
            tag: "laptop" 
        },
        { 
            product_id: 3, 
            tag: "apple" 
        },
        { 
            product_id: 3, 
            tag: "13 inch" 
        },
        { 
            product_id: 3, 
            tag: "m1" 
        },
        { 
            product_id: 3, 
            tag: "gray" 
        },
        { 
            product_id: 4, 
            tag: "hp" 
        },
        { 
            product_id: 4, 
            tag: "ink" 
        },
        { 
            product_id: 4, 
            tag: "printers" 
        },
        { 
            product_id: 4, 
            tag: "overpriced" 
        },
        { 
            product_id: 4, 
            tag: "tinten" 
        },
        { 
            product_id: 5, 
            tag: "apple" 
        },
        { 
            product_id: 5, 
            tag: "iphone" 
        },
        { 
            product_id: 5, 
            tag: "128" 
        },
        { 
            product_id: 5, 
            tag: "smartphone" 
        },
        { 
            product_id: 5, 
            tag: "phone" 
        },
        { 
            product_id: 6, 
            tag: "nintendo" 
        },
        { 
            product_id: 6, 
            tag: "switch" 
        },
        { 
            product_id: 6, 
            tag: "joycon" 
        },
        { 
            product_id: 6, 
            tag: "portable" 
        },
        { 
            product_id: 6, 
            tag: "gaming" 
        },
        { 
            product_id: 7, 
            tag: "usb" 
        },
        { 
            product_id: 7, 
            tag: "type c" 
        },
        { 
            product_id: 7, 
            tag: "stick" 
        },
        { 
            product_id: 7, 
            tag: "sandisk" 
        },
        { 
            product_id: 7, 
            tag: "128" 
        },
        { 
            product_id: 8, 
            tag: "ram" 
        },
        { 
            product_id: 8, 
            tag: "memory" 
        },
        { 
            product_id: 8, 
            tag: "ddr4" 
        },
        { 
            product_id: 8, 
            tag: "3200" 
        },
        { 
            product_id: 8, 
            tag: "16" 
        },
        { 
            product_id: 9, 
            tag: "coffee" 
        },
        { 
            product_id: 9, 
            tag: "expresso" 
        },
        { 
            product_id: 9, 
            tag: "siemens" 
        },
        { 
            product_id: 10, 
            tag: "rice" 
        },
        { 
            product_id: 10, 
            tag: "cooker" 
        },
        { 
            product_id: 10, 
            tag: "rice cooker" 
        }
    ]);
};