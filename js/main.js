document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          // 簡易的な認証処理
          if (username === "admin" && password === "admin") {
              localStorage.setItem("userType", "admin");
              alert("ログインしました。");
              window.location.href = "/";
          } else {
              alert("ログインに失敗しました。");
          }
      });
  }
});

