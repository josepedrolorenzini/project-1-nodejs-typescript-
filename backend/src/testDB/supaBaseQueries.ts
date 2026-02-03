import {supabase}  from '../db/supabaseConn.js'



export const readCustomer = async ():Promise<string|any> => {
    let { data, error } = await supabase.from('customers').select('*') ; 
   if( !error ) {
    console.log(data)
    return data ;
} else{
    console.error(error)
    return error;
   } 
}
 readCustomer() ;