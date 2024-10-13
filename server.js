const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 提供静态文件
app.use(express.static(path.join(__dirname, 'public')));

// 处理路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/research', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'research.html'));
});

app.get('/team', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'team.html'));
});

app.get('/recruitment', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'recruitment.html'));
});

// 处理其他所有路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
