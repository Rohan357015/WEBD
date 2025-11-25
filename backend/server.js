import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about',(req,res)=>{
  const students = [
    {
        id : 1,
        name :"rohan",
        class :"10th"
    },
      {
        id : 2,
        name :"shiva",
        class :"10th"
    },
      {
        id : 3,
        name :"raghav",
        class :"10th"
    },
      {
        id : 4,
        name :"vishal",
        class :"10th"
    },
      {
        id : 5,
        name :"razz",
        class :"10th"
    }
  ];
  res.json(students);
});

app.get('/contact',(req,res)=>{
  res.send('<h1>Contact me</h1>');
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});