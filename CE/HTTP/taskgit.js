const http = require('http');
const axios = require('axios')
const port = 3000;
const server = http.createServer(async(req,res) => {
    console.log('New request received');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
//    const response =  await fetch("https://dummyjson.com/products")
//    const data =  await response.json();
   //const jdata = JSON.parse(data);
   const response =  await axios.get("https://api.github.com/search/users", 
    {
        params:{
            q:"location:ghaziabad"
        }
    }
   )
   const usersdata =  response.data.items;
   let frontdata = `<html><head></head><body> `
   usersdata.forEach((users) => {
    frontdata += `<div><img src = "${users.avatar_url}"</div>`;
   })  ;
   frontdata += `</body></html>`
    res.end(frontdata);
});
server.listen (port, () => {
    console.log(`Server is running on the port ${port}`);
})