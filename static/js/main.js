document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    const adminURL = baseURL + "admin/";
    const loginURL = baseURL + "login/";
  

    console.log("loginForm:", loginForm); // デバッグ用コード
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const baseURL = "{{ .Site.BaseURL }}";

        // 簡易的な認証処理
        if (username === "admin" && password === "admin") {
            localStorage.setItem("userType", "admin");
            alert("管理者でログインしました。");
            window.location.href = adminURL;
        } else if(username === "user" && password === "user") {
            localStorage.setItem("userType", "user");
            alert("ログインしました。");
            window.location.href = baseURL;
        }
        else {
            alert("ログインに失敗しました。");
            window.location.href = loginURL;
        }
    });

});

