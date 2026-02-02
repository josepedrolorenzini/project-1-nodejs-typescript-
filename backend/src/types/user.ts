export interface User {
    id:number;
    name:string;
    age:number;
    email:string;
}


const users: User[] = [
  { id: 1, name: "Jose", age: 30, email: "jose@example.com" },
  { id: 2, name: "Ana", age: 28, email: "ana@example.com" },
];


const getUserData = async (
    users: User[],
key?:keyof User): Promise<(string|any)[]> => {
  // Example: returning names
  return users.map(u => u); 
};

console.log(getUserData(users))