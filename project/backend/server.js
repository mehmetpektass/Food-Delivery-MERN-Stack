import express from 'express';
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/food' ,foodRouter)

app.get("/", (req, res) => {
  res.json("API Working");
});

app.listen(port, () =>{
    console.log(`Server started on http://localhost:${port}`)
})

