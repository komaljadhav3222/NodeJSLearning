const { ifError } = require("assert");
const { error } = require("console");
const fileSystem=require(`fs`);

// console.log(`=========================== write file  =============================`);
// const contentToWriteFile="Hello, Java Script";

//     fileSystem.writeFile('example.txt',contentToWriteFile,(error)=>{
//         if (error) {
//            console.log(error);
//         } else {
//             console.log("content written to file successfully"); 
//         }
        
//     });  

// console.log(`=========================== read file  =============================`);
// // //Reading the file

// fileSystem.readFile('01_module.txt','utf-8',(error,data)=>{
//     if (error) {
//        console.log(error);
//     } else {
//         console.log("content read from file successfully :- ",data); 
//     }  
    
// });  
// console.log(`=========================== file information =============================`);

// // //file information
// fileSystem.stat('01_module.txt',(error,stat)=>{
//     if (error) {
//      console.log(error);   
//     } else {
//         console.log(" file content:-", stat.size);
//         console.log(" is this file:-", stat.isFile());
//         console.log(" is this directory :-", stat.isDirectory());
//     }
// })
// console.log(`=========================== Delete file =============================`);
// // //Delete file
// fileSystem.unlink('example.txt',(error)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("file deleted successfully");
//     }
//     })

// console.log(`=========================== Make Directory=============================`);
// //make directory

// fileSystem.mkdir("newDirectory",(err)=>{
// if (err) {
//     console.log(err);
// } else {
//     console.log("Director created successfully.");
// }
// })
console.log(`=========================== Write in file(which is created inside new folder)   =============================`);
const contentToWrite="Hello, Java Script";

    fileSystem.writeFile('newDirectory/example.txt',contentToWrite,(error)=>{
        if (error) {
           console.log(error);
        } else {
            console.log("content written to file successfully"); 
        }
        
    });  

    console.log(`=========================== copy file =============================`);
    fileSystem.copyFile('01_module.txt','copiedExample.txt',0,(err)=>{
if (err) {
    console.log(err);
} else {
    console.log("file copied successfully");
}
    })

    // console.log(`=========================== Read Directory=============================`);
// //reading directory

// fileSystem.readdir("newDirectory",(err,content)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Director read successfully.",content);
//     }
//     })

// console.log(`=========================== remove Directory=============================`);
// fileSystem.rmdir("newDirectory",(err)=>{
// if (err) {
//     console.log(err); 
// } else {
//   console.log("Directory removed");  
// }
// })