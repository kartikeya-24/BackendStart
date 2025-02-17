const http = require("http"); // import the moudule
const fs = require("fs/promises");

// create a server
const server = http.createServer(async (req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("Hello, world!");
  const data = await fs.readFile("./form.html", "utf-8");
  res.end(data);
});
PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`

  );
});