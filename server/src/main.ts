import  compression from "compression"   
import express, {Application} from "express"; 
import morgan from  "morgan"; 
import cors from "cors"; 
import authRouter from "./auth/router"; 
import internshipRouter from "./internships/router";

const app: Application = express(); 
const port = 7000; 

app.use(express.json()); 
app.use(morgan("dev"));  
app.use(compression());
app.use(cors()); 

//routers 
app.use("/api/auth",authRouter)
app.use("/api/internship",internshipRouter);


const start = () => {
  app.listen(port, () => {
    console.log(`server is up and runnning on http://localhost:${port}`);
  });
};

start();
