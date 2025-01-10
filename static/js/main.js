document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

    // ログインフォームの処理
    if (path.includes("login")) {
      const loginForm = document.getElementById("loginForm");
      loginForm.addEventListener("submit", async (event) => {
          event.preventDefault();
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          // ダミーのログイン認証処理
          if (username === "admin" && password === "admin") {
              localStorage.setItem("userType", "admin");
              window.location.href = "https://a-sakagami.github.io/static_E2Esite/admin/";
              alert("管理者ログイン成功");
          } else {
              localStorage.setItem("userType", "user");
              window.location.href = "https://a-sakagami.github.io/static_E2Esite/";
              alert("ログイン成功");
          }
      });
  }

  // 管理者ページの処理
  if (path.incledes("admin")) {
      const messageList = document.getElementById("messageList");

      // ダミーデータを取得（サーバー実装が必要）
      const messages = [
          { userId: 1, message: "テストメッセージ1" },
          { userId: 2, message: "テストメッセージ2" },
      ];

      messages.forEach((msg) => {
          const li = document.createElement("li");
          li.textContent = `User ${msg.userId}: ${msg.message}`;
          messageList.appendChild(li);
      });
  }
});
