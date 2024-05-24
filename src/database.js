import { createPool } from "mysql2/promise"


const pool = createpool({
    host: 'localhost',
    port: '3306',
    user: 'prueba01',
    pasword: 'prueba01',
    database: 'prueba01'
});

export default pool;