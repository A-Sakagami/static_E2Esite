---
title: "Login"
draft: false
---
# ログインフォーム

以下のフォームに必要事項を入力してください。

## フォーム

```html
<form action="/login" method="post">
    <label for="username">ユーザー名:</label>
    <input type="text" id="username" name="username" required>
    <br>
    <label for="password">パスワード:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <button type="submit">ログイン</button>
</form>
```