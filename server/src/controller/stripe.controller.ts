import Stripe from 'stripe';

export default class ProductController {
    stripe = (amount:any, currency:any,source:any) => new Promise ((resolve,reject) => {
        const KEY = 'sk_test_51Lf26FHKr1AJKPMvaQdXjRsNN3ikuNn1gkr6zVoz3snm9epi0J9jzUmDXpY8qYcYhrdQjx6tos3QFRMf6nUaQ8IT0062ni2njM';
        const stripe = new Stripe(KEY,{apiVersion: '2022-08-01'});
        
        const response =  stripe.charges.create({
            amount: amount,
            currency: currency,
            source: source, // obtained with Stripe.js
        });
        
        response.then( res => {
                return resolve(res)
        })
        .catch( err =>{
                return reject(err)
        })
    })
}