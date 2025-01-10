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
              alert("管理者でログインしました。");
              window.location.href = "{{ .Site.BaseURL }}";
          } else if (username === "user" && password === "user") {
              localStorage.setItem("userType", "user");
              alert("ユーザーでログインしました。");
              window.location.href = "{{ .Site.BaseURL }}";
          } else{
              alert("ログインに失敗しました。");
          }
      });
  }
});

