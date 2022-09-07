# DigitalSpine-task
Digital Spine simple e-commerce application assessment 

## Installation

```bash
cd server/
npm install
```

```bash
cd client/
yarn install
```

### 1. PostgreSQL Installation
install postgres and configure with the following credentials
```
    user: 'postgres'
    host: 'localhost'
    password: "postgres"
    database: 'ecommerce'
```

### 2. Install Knex globally , run the following on **server** 
```
npm install knex -g
npm install knex --save
npm install pg --save
```

<b>Running initial Migration and Seed:</b><br>
Navigate to the **server** and run the following command
```
knex migrate:latest
knex seed:run
```

### 3. Run the following on **server** 
```
npm run dev
```

### 4. Run the following on **client** 
```
yarn start
```

### 5. Start app

```
localhost:3000
```