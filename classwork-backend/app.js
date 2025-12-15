/*import dotenv from 'dotenv';
import express from'express';
import mongoose from 'mongoose';
import userRoute from './route/user.js'

dotenv.config()
const app = express()
app.use(express.json())


//Routes
 app.use('/api/user', userRoute)

 console.log('my name is winner')

app.get('/', (req, res)=>{
    res.send('hello winner')
 })

 mongoose.connect(process.env.MONGODB_URL)
 .then(() => {
  console.log("connected to my Database winner")
 }).catch(() =>{
    console.log('E kmw connect oh')
 })

 app.listen(5000, () => {
        console.log(`backend is running in port ${process.env.PORT}`)

    }) */

        import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './route/user.js';
import ProductRouter from './route/product.js';
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/user', userRoute);
app.use('/api/product', ProductRouter);

console.log('my name is winner');

// Connect to MongoDB first, then start server
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB (winner)");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Backend is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection failed:', err.message);
  });

  // ENABLE CORS TO CONNECT MY BACKEND
  const allowedOrigins = [
  "http://localhost:5000",
  "https://hgsccdigitalskills.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
       // mobile apps, Postman
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);