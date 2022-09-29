import express, { Application, Request, Response } from "express";
import graphql from "./graphql/graphql";
import mongoose from "mongoose";
import note from '../note'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5000
const app: Application = express();

app.use(express.json())

app.use("/graphql", graphql);

app.get("/", (req: Request, res: Response) => {
  console.log("get work");

  res.json("work");
});


app.use('/test', note )

app.listen(port, async () => {
  (await mongoose.connect(process.env.DBSTRING || '' )) &&
    console.log("db connect");
  console.log(`server running at port ${port}`);
});
