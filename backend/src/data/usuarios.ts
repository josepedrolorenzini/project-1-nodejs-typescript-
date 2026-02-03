import { pool } from "../db/db.js";
import type { User  } from "../types/user";



export async function getUsers():Promise<any[]>{

    const  result = await pool.query<User>("SELECT * FROM users");
    console.log(result.rows)
    return result.rows ;

}


export async function postUsers(user: Omit<User, 'id'>):Promise<User>{
    const {name,age,email} = user;
      const query = await pool.query(
    "INSERT INTO users (name, age, email) VALUES ($1, $2, $3) RETURNING *",
    [name, age, email]
    );
    return query.rows[0];
}



// const users: User[] = await getUsers();


// export const users: User[] = [
//   { id: 1, name: "Jose", age: 30, email: "jose@example.com" },
//   { id: 2, name: "Ana", age: 28, email: "ana@example.com" },
//   { id: 3, name: "Luis", age: 25, email: "luis@example.com" },
// ];