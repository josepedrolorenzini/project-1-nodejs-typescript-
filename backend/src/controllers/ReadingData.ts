import  { open } from 'node:fs/promises';
import  * as  path from    'node:path'
import * as url from 'url' ; 


class ReadingData<Type>{

    hello:string;
    file:Type;
    __filename:string;
    __dirname:string;

    constructor(hello:string,file:Type){1
        this.hello= hello;
        this.file = file;
        this.__filename = url.fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.__filename);
    }
    getFile():Type{
        return this.file;
    }
    testFiles():{ importMetaUrl: string; fileName: string; dirName: string }[]{
         console.log(import.meta.url)
         console.log(this.__filename);
         console.log(this.__dirname);
         const FilesRoute = [
            {
                importMetaUrl: import.meta.url,
                fileName: this.__filename,
                dirName: this.__dirname
            }
         ]
         return FilesRoute ;
    }
}


const object1 = new ReadingData('hello terminal','C:/xampp/htdocs/2026/javascript/node-js/project1/backend/src/data/data.ts');

console.log(object1.getFile());


const readFile = async () =>{
    
    const file = await open(object1.getFile()) ;
    for await (const chunk of file.readableWebStream())
   // console.log(chunk);
   console.log(object1.testFiles())

    await file.close();
}

readFile()