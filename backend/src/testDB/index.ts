import { pool } from "../db/db.js"; 


export async function testPostgresConnection(){
     const result = await pool.query("SELECT now()")
     return ` DB connected at:'  ${result.rows[0].now} `
     // process.exit(0);
}


