const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 提供静态文件
app.use(express.static(path.join(__dirname)));

// 处理所有路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
