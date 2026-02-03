import {Pool} from 'pg' ;


export const pool = new Pool({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'xxx',
        database: 'tsnode',
}) ; 


pool.on('connect', () => {
  console.log('Connected to PostgreSQL  :) ');
});