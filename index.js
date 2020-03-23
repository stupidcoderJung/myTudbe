const express = require("express"); //require is nothing but getting node module
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

//request object is a data object from sender like who send this message, or what kind data it is
//resonse object is a data object to sender
function handleHome(request, response) {
  console.log(request);
  response.send("HI Chrome Brownser!");
}
app.get("/", handleHome);

function handleProfile(request, response) {
  response.send("you requested me a /profile methode");
}

app.get("/profile", handleProfile);

app.get("/cal/randomadd", (request, response) => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const result = num1 + num2;

  response.send(`num1(${num1})+num2(${num2})=${result} 입니다.`);
});

app.listen(PORT, handleListening);
