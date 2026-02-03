import { useEffect, useState } from 'react' 
import React from 'react'

function SupabaseGetCustomers() {


      interface Customer {
      id: number;
      name: string;
      email: string;
      image_url?:string;
    }
    
      const [customers,setCustomers] = useState<Customer[]>([]) ;
    
      const fetchSupabaseCustomerData = async() => {
          try {
          const res = await fetch("http://localhost:4040/api/supabase");
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const data: Customer[] = await res.json();
          setCustomers(data);
        } catch (error) {
          console.error("Failed to fetch customers:", error);
        }
      }
    
    
      useEffect(()=>{
        fetchSupabaseCustomerData()
      },[])
  return (
    <div>

    { customers.map((customer) => 
       <div key={customer.id}>
            <p>{customer.name} - {customer.email}</p>
        </div>
            )}

    </div>
  )
}

export default SupabaseGetCustomers