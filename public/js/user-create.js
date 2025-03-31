document.addEventListener("DOMContentLoaded", () => {
  console.log("[user-create.js] 読み込まれました");

  const form = document.getElementById("createUserForm");
  if (!form) {
    console.error("createUserForm が見つかりません");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("[user-create.js] フォーム送信イベント発生");

    const username = form.username.value.trim();
    const password = form.password.value;
    const role = form.querySelector('input[name="role"]:checked')?.value;

    if (!username || !password) {
      alert("ユーザー名とパスワードは必須です");
      return;
    }

    const users = JSON.parse(localStorage.getItem("userInfo") || "[]");
    if (users.some(u => u.username === username)) {
      alert("そのユーザー名は既に存在します");
      return;
    }

    users.push({ username, password, role });
    localStorage.setItem("userInfo", JSON.stringify(users));
    alert(`ユーザー「${username}」を登録しました！`);
    form.reset();
  });
});
