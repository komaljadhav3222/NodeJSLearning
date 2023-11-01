//Path modules provide utility for working with file and directory path

const path=require(`path`);
const path1="myDir";
const path2="file.txt";
const fullPath=path.join(__dirname,path1,path2);
console.log(`Joined path :-  ${fullPath}`);

//Getting the file extension

const fileName="02_path.js";
console.log(path.extname(fileName));

//Getting the base name (file name with extension)

const filePath="Angular/html/notes/HtmlNotes/note.pdf"
console.log(path.basename(filePath));