document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const adminURL = baseURL + "admin/";
    const loginURL = baseURL + "login/";

    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        let userInfo = JSON.parse(localStorage.getItem("userInfo") || "[]");

        // 簡易的な認証処理（更新予定：任意のアカウントを追加・管理者と一般の選択式）
        if (username === "admin" && password === "adminpass1234") {
            userInfo.push({
                userType:"admin",
                username: username,
                password: password
            });
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            alert("管理者でログインしました。");
            window.location.href = adminURL;
        } else if(username === "user" && password === "userpass1234") {
            userInfo.push({
                userType:"user",
                username: username,
                password: password
            });
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
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
    // console.log(baseURL);

    // ログイン状態を確認
    let userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
        // ログイン中の場合
        authMenu.textContent = "Logout";
        authMenu.href = "#";
        authMenu.addEventListener("click", () => {
            // ログアウト処理
            localStorage.removeItem("userInfo");
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
