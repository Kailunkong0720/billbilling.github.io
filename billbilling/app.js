// create an express app
import express from "express";
const app = express();

// 使用 express-static middleware
app.use(express.static("public"));

// 定義第一個路由
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

// 啟動伺服器監聽請求
app.listen(process.env.PORT || 3001, () =>
  console.log("Server is running...")
);