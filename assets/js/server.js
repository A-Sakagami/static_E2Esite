// server.js
const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const PORT = 3000;

// データベース接続
const db = new sqlite3.Database("data.db");

// テーブル作成
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, username TEXT, message TEXT)");
});

// ミドルウェア
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ログイン処理
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.get("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, user) => {
    if (err) return res.status(500).send("Internal Server Error");
    if (!user) return res.status(401).send("Invalid credentials");
    res.json({ message: "ログインに成功しました。", user });
  });
});

// メッセージ送信
app.post("/submit-message", (req, res) => {
  const { userId, message } = req.body;
  db.run("INSERT INTO messages (userId, message) VALUES (?, ?)", [userId, message], function (err) {
    if (err) return res.status(500).send("Internal Server Error");
    res.json({ message: "メッセージを保存しました。", messageId: this.lastID });
  });
});

// データ取得（管理者用）
app.get("/admin/messages", (req, res) => {
  db.all("SELECT * FROM messages", (err, rows) => {
    if (err) return res.status(500).send("Internal Server Error");
    res.json(rows);
  });
});

// サーバー起動
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
