const { ifError } = require("assert");
const fileSystem=require(`fs`);

const contentToWrite="Hello, Java Script";

    fileSystem.writeFile('example.txt',contentToWrite,(error)=>{
        if (error) {
           console.log(error);
        } else {
            console.log("content written to file successfully"); 
        }
        
    });  

//Reading the file

fileSystem.readFile('01_module.txt','utf-8',(error,data)=>{
    if (error) {
       console.log(error);
    } else {
        console.log("content read from file successfully :- ",data); 
    }  
    
});  

//file information
fileSystem.stat('01_module.txt',(error,stat)=>{
    if (error) {
     console.log(error);   
    } else {
        console.log(" file content:-", stat.size);
        console.log(" is this file:-", stat.isFile());
        console.log(" is this directory :-", stat.isDirectory());
    }
})

//Delete file
fileSystem.unlink('example.txt',(error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log("file deleted successfully");
    }
    })