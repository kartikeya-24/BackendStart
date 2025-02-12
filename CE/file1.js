const fs = require('fs');  //fs: file system
const data = fs.readFileSync("./data.txt","utf-8"); //{encoding: "utf-8"}
console.log(data);  //data.toString()
if (data.match("H")){
    console.log("H is present");
    const changedata = data.replace("H", "ABES");
    fs.writeFileSync("./data.txt", changedata);    
}

//fs.unlinkSync("./data2.txt");
// fs.writeFileSync("./data1.txt","CE promise");
// fs.appendFileSync("./data1.txt","AKTU");
// fs.renameSync("./data1.txt","./data2.txt")