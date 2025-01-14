document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const adminURL = baseURL + "admin/";
    const loginURL = baseURL + "login/";
  
    console.log("DOM が完全にロードされました");

    if (loginForm) {
        console.log("loginForm が見つかりました:", loginForm);
    } else {
        console.error("loginForm が見つかりません");
    }
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

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

document.addEventListener("DOMContentLoaded", () => {
    const authMenu = document.getElementById("auth-menu");
    console.log(baseURL);

    // ログイン状態を確認
    const userType = localStorage.getItem("userType");

    if (userType) {
        // ログイン中の場合
        authMenu.textContent = "Logout";
        authMenu.href = "#";
        authMenu.addEventListener("click", () => {
            // ログアウト処理
            localStorage.removeItem("userType");
            alert("ログアウトしました。");
            window.location.href = baseURL;
        });
    } else {
        // ログアウト中の場合
        authMenu.textContent = "Login";
        authMenu.href = baseURL + "login/";
    }

    // ハンバーガーメニューのスクリプト
    const hamburger = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('header nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    } else {
        console.error("ハンバーガーメニューの要素が見つかりません");
    }
});
