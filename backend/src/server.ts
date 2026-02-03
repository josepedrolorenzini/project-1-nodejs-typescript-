import * as http from "http";
import type { Customer } from "./types/customers";
import { getUsers , postUsers } from "./data/usuarios.js";
import { pool } from "./db/db-bkp.js";
import { testPostgresConnection } from "./testDB/index.js";

const PORT = 4040 ;

const server = http.createServer( async (req: any, res: any) => {

  // GET / Home
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
    return; // 
  }   // GET / Home

    // GET / postgres users 
  if(req.url === '/users' && req.method === "GET"){
    const message = await testPostgresConnection().catch(e=>{console.error(e)}) ;
    console.log(message)
    //const users = await getUsers();
    res.writeHead(200,{'Content-type':"application/json"}) ;
    res.end(JSON.stringify(await getUsers())) ; 
    return ;
  }  // GET / postgres users 

   // POST /test-users 

    if(req.url === "/test-chunk1" && req.method==="POST"){
      let body = "" ;
      req.on("data",(chunk:Buffer)=>{
          console.log("📬 Chunk received:", chunk);
          console.log("📝 Chunk as string:", chunk.toString());
          console.log("📏 Chunk size:", chunk.length, "bytes");
          console.log("---");
        body += chunk.toString();
      }) ; 
          // ✅ Log complete body when all chunks received
     req.on("end", () => {
      // curl.exe -X POST http://localhost:4040/test-chunk1 -H "Content-Type: application/json" -d '{\"name\":\"John\",\"age\":25}'
      const data = JSON.parse(body) ;
      console.log("✅ Complete body:", body);
    
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ 
        message: "POST received ✅" ,
        data:data
      }));
      });
      return ;
    }
    // POST /test-users 

   // POST /users 
   if(req.url === '/post-users' && req.method === "POST"){
     let body = "" ;
     
    req.on("data", (chunk:Buffer)=>{
      body += chunk.toString();
    })

    req.on("end", async ()=>{

      try {
        const data = JSON.parse(body)
        console.log(data)
        const postUser = await postUsers(data)
        res.writeHead(200,{'Content-type':"application/json"});
        res.end(JSON.stringify({message: "POST received ✅" , data:data}))
        
      } catch (error) {
         res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    })
    return ;
   }

  // POST /data
  if (req.method === "POST" && req.url === "/data") {
    let body = "";
   

    req.on("data", (chunk: any) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);

        let user:Customer={
            id:data.id,
            name:data.name,
            email:data.email,
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "POST received ✅",
            received: data,
          })
        );

        console.log(data)
        console.log(user)
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });

    return; // ✅ already correct
  }

   // POST /data

  // 404
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
