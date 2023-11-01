const fileSystem=require(`fs`);
fileSystem.appendFile('01_module.txt'," \n This is appended content in file",(error)=>{
if (error) {
    console.log(error);
} else {
    console.log("Content appended successfully");
}
})

fileSystem.readFile('01_module.txt','utf-8',(err,content)=>{
if (err) {
    console.log(err);
} else {
    console.log("content from file - ",content);
}
});