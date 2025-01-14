document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  const adminURL = baseURL + "admin/";
  const loginURL = baseURL + "login/";
  
  console.log("adminURL:", adminURL);
  console.log("loginURL:", loginURL);

  if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          // 簡易的な認証処理
          if (username === "admin" && password === "admin") {
              localStorage.setItem("userType", "admin");
              alert("管理者でログインしました。");
              window.location.href = adminURL;
          } else if (username === "user" && password === "user") {
              localStorage.setItem("userType", "user");
              alert("ユーザーでログインしました。");
              window.location.href = baseURL;
          } else{
              alert("ログインに失敗しました。");
          }
      });
  }
});

