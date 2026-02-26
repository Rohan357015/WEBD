const http = require('http');
const sum = require('./getData');
const fs = require('fs').promises;
const { readData, writeData } = require('./usefsmodule');

const PORT = 4002;

const server = http.createServer(async (req, res) => {

  // ✅ CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  try {

    // ✅ GET /msg
    if (req.url === '/msg' && req.method === "GET") {
      res.setHeader('Content-Type', 'text/html');
      res.end("<h2>Greeting of the day</h2>");
    }

    // ✅ GET /data
    else if (req.url === "/data" && req.method === "GET") {
      res.setHeader('Content-Type', 'application/json');
      const data = await sum();
      res.end(JSON.stringify({ msg: data }));
    }

    // ✅ GET /datawrite
    else if (req.url === "/datawrite" && req.method === "GET") {
      res.setHeader('Content-Type', 'application/json');
      const data = await writeData();   // 🔥 added await
      res.end(JSON.stringify({ msg: data }));
    }

    // ✅ GET /dataread
    else if (req.url === "/dataread" && req.method === "GET") {
      res.setHeader('Content-Type', 'application/json');
      const data = await readData();   // 🔥 added await
      res.end(JSON.stringify({ msg: data }));
    }

    // ✅ POST /register
    else if (req.url === "/register" && req.method === "POST") {

      let body = "";

      req.on("data", chunk => {
        body += chunk;
      });

      req.on("end", async () => {
        try {
          const { name, email, password } = JSON.parse(body);
          // console.log(name, email, password);

          const fdata = await fs.readFile('student.json', 'utf-8');
          let arr = JSON.parse(fdata);

          const status = arr.find(ele => ele.email === email);

          res.setHeader('Content-Type', 'application/json');

          if (status) {
            res.end(JSON.stringify({ msg: "Email is already registered" }));
          } else {
            arr.push({ name, email, password });

            await fs.writeFile('student.json', JSON.stringify(arr, null, 2));

            res.end(JSON.stringify({ msg: "student register successfully!!!" }));
          }

        } catch (err) {
          res.end(JSON.stringify({ msg: "Invalid JSON Data" }));
        }
      });
    }

    // ✅ POST /login
    else if (req.url === "/login" && req.method === "POST") {

      let body = "";

      req.on("data", chunk => {
        body += chunk;
      });

      req.on("end", async () => {
        try {
          const { email, password } = JSON.parse(body);

          const fdata = await fs.readFile('student.json', 'utf-8');
          let arr = JSON.parse(fdata);

          const status = arr.find(ele =>
            ele.email === email && ele.password === password
          );

          res.setHeader('Content-Type', 'application/json');

          if (status) {
            res.end(JSON.stringify({ msg: "success" }));
          } else {
            res.end(JSON.stringify({ msg: "Invalid user" }));
          }

        } catch (err) {
          res.end(JSON.stringify({ msg: "Invalid JSON Data" }));
        }
      });
    }

    // ✅ Invalid route
    else {
      res.setHeader('Content-Type', 'text/html');
      res.end("<h2 style='color:red'>Invalid end point</h2>");
    }

  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ msg: "Server Error", error: error.message }));
  }

});

server.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});