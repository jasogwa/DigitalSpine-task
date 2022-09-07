import { json, Request, Response } from "express";
import { pool } from "../dbconfig";
import { QueryResult } from "pg";

export default class ProductController {

    productById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = parseInt(req.params.id);
            const querystring = `SELECT p.id,p.title,p.description,
                                        p.display_image,p.brand,p.category,
                                        p.available,p.is_best_seller,
                                        pp.value,pp.currency
                                    FROM products p
                                    INNER JOIN product_price pp
                                    ON p.id=pp.product_id
                                    WHERE p.id = $1`;
            const response: QueryResult = await pool.query(querystring,[id]);
            return res.status(200).json(response.rows)
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server error');
        }
    }

    getAllProducts = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const querystring = `
                        SELECT p.id,p.title,p.description,
                            p.display_image,p.brand,p.category,
                            p.available,p.is_best_seller,
                            pp.value,pp.currency
                         FROM products p
                         INNER JOIN product_price pp
                         ON p.id=pp.product_id`;
            const response: QueryResult = await pool.query(querystring);
            return res.status(200).json(response.rows);
        } catch (error) {
            console.log(error);
            return res.status(500).json('Internal Server error');
        }
    }

}