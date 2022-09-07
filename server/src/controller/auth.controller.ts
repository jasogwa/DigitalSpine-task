import { Request, Response } from "express";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import { pool } from "../dbconfig";
import { QueryResult } from "pg";

export default class AuthController {

    public  register = async (req: Request, res: Response) => {
        const { username, email, password } = req.body;
        try{
            let hash = CryptoJS.AES.encrypt(password, '123').toString();
            let querystring = `INSERT INTO users (username, email, password)
                                VALUES ($1,$2,$3)`;
            const response = await pool.query(querystring, [username, email, hash]);
            res.json({
                message: 'User Added successfully',
                body: {
                    user: { username, email}
                }
            });
        }catch (err) {
            res.status(500).json(err);
        }
    }

    public login = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        try {
            const querystring  = `SELECT u.id,u.username, u.email, u.password
                                FROM users u WHERE u.email = $1 `;
            const response: QueryResult = await pool.query(querystring,[email]);
            let pass:string = response.rows[0].password;
            let id:number = response.rows[0].id;
            let username:string = response.rows[0].username;
            
            let hashPass = CryptoJS.AES.decrypt(pass,'123');
            let originalPass = hashPass.toString(CryptoJS.enc.Utf8);
            
            originalPass !== password && res.status(401).json("Wrong credentials!");
            
            let token:string = jwt.sign({id:id,username:username,email:email},'secret',{expiresIn:'24h'});

            return res.json(token);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}