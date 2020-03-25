import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const handleProfile = (request, response) =>
  response.send("you requested me a /profile methode");
const handleHome = (request, response) => response.send("HI Chrome Brownser!");

const middleWare = (req, res, next) => {
  res.send("disconnectiong from middleware");
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.use(middleWare);
app.get("/profile", handleProfile);
app.get("/cal/randomadd", (request, response) => {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const result = num1 + num2;

  response.send(`num1(${num1})+num2(${num2})=${result} 입니다.`);
});

export default app;
