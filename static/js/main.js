document.addEventListener("DOMContentLoaded", () => {
    const adminURL = baseURL + "admin/";
    const loginURL = baseURL + "login/";

    // ログイン・ログアウトの出し分け処理
    const authMenu = document.getElementById("auth-menu");

    // 初期化処理
    updateAuthMenu(authMenu);


    // ログインフォームの送信イベントをキャッチ
    document.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        // 簡易的な認証処理（更新予定：任意のアカウントを追加・管理者と一般の選択式）
        if (userInfo && Array.isArray(userInfo)) {
            for (let i = 0; i < userInfo.length; i++) {
                if (userInfo[i].username === username && userInfo[i].password === password && userInfo[i].userType === "admin") {
                    localStorage.setItem("currentUser", JSON.stringify({
                        userType: userInfo[i].userType,
                        username: username,
                        password: password,
                        loggedIn: true
                    }));
                    alert(`${userInfo[i].userType === "admin" ? "管理者" : false} でログインしました。`);
                    window.location.href = userInfo[i].userType === "admin" ? adminURL : baseURL;
                    return;
                } else if (userInfo[i].username === username && userInfo[i].password == password && userInfo[i].userType === "user") {
                    localStorage.setItem("currentUser", JSON.stringify({
                        userType: userInfo[i].userType,
                        username: username,
                        password: password,
                        loggedIn: true
                    }));
                    alert(`${userInfo[i].userType === "user" ? "一般ユーザー" : false} でログインしました。`);
                    return;
                } 
            }
            alert("ユーザー名またはパスワードが違います。");
                return;
        }
        // エラーメッセージを表示
        if (username === '' || password === '') {
            alert('ユーザー名またはパスワードが入力されていません');
            event.preventDefault();
        }
    }); // end of submit event listener

    // ハンバーガーメニューのスクリプト
    const hamburger = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    } else {
        console.error("ハンバーガーメニューの要素が見つかりません");
    }
});

// ログイン状態の確認とUI更新
function updateAuthMenu(authMenu) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("currentUser:", currentUser);
    console.log("Auth menu:", authMenu);

    if (currentUser && currentUser.loggedIn) {
        // ログイン中の表示
        authMenu.textContent = "Logout";
        authMenu.href = "#";

        authMenu.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            alert("ログアウトしました。");
            window.location.href = baseURL;
        });
    } else {
        // 未ログイン時の表示
        authMenu.textContent = "Login";
        authMenu.href = baseURL + "login/";
    }
}