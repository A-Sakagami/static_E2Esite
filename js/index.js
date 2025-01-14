// ユーザー別の表示分けJavascript

// 初期化
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const loginScreen = document.getElementById("login-screen");
    const userArea = document.getElementById("user-area");

    // ログイン種別の取得
    const userType = localStorage.getItem("userType");

    if (userType === "admin") {
        // 管理者用エリアを表示
        window.location.href = baseURL + "admin/"; // admin.html に遷移
    } else if (userType === "user") {
        // 一般ユーザー用エリアを表示
        loginScreen.style.display = "none";
        userArea.style.display = "block";
    } else {
        // ログインボタンを表示・ログイン画面へ遷移
        if (loginButton) {
            loginButton.addEventListener("click", () => {
                window.location.href = baseURL + "login/";
            });
        } else {
            console.error("login-button が見つかりませんでした。");
        }
    }
});
 

