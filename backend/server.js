// import express from 'express';
// import cors from 'cors';

// const app = express();
// const port = 5000;
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/about',(req,res)=>{
//   const students = [
//     {
//         id : 1,
//         name :"rohan",
//         class :"10th"
//     },
//       {
//         id : 2,
//         name :"shiva",
//         class :"10th"
//     },
//       {
//         id : 3,
//         name :"raghav",
//         class :"10th"
//     },
//       {
//         id : 4,
//         name :"vishal",
//         class :"10th"
//     },
//       {
//         id : 5,
//         name :"razz",
//         class :"10th"
//     }
//   ];
//   res.json(students);
// });

// app.get('/contact',(req,res)=>{
//   res.send('<h1>Contact me</h1>');
// });

// app.listen(port, () => {
//   console.log('Server is running on port ' + port);
// });


const http = require('http');
const PORT = 4005;
const sum = require('./getdata');


const server =  http.createServer(async(req, res) => {
  // res.setHeader("Content-Type", "text/html");
     res.setHeader('Access-Control-Allow-Origin','*');
     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
     res.setHeader('Access-Control-Allow-Headers','Content-Type');
  // res.end("<h1>hi there</h1>");
  // console.log(Object.keys(req));
  if(req.url ==="/msg" && req.method ==="GET"){
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <h1 style="color: blue; background-color: yellow;">welcomme to node server</h1>`);
  } 

  if(req.url ==="/data" && req.method ==="POST"){
    const result = await sum();
 
   

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({msg : "data inserted successfully", data : result}));
  }
  if(req.url ==="/data" && req.method ==="PUT"){
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ msg : result}));
  }

  
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
});