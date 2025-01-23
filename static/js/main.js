document.addEventListener("DOMContentLoaded", () => {
    const adminURL = baseURL + "admin/";
    const loginURL = baseURL + "login/";

    // ログインフォームの送信イベントをキャッチ
    document.addEventListener("submit", (event) => {
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

        // エラーメッセージを表示
        if (username === '' || password === '') {
            alert('ユーザー名またはパスワードが入力されていません');
            event.preventDefault();
        }
    }); 

    // ログイン・ログアウトの出し分け処理
    const authMenu = document.getElementById("auth-menu");

    // ログイン状態の確認とUI更新
    function updateAuthMenu() {
        const userInfo = JSON.parse(localStorage.getItem("userInfo")); // ユーザー情報を取得
        console.log("userInfo:", userInfo);

        if (userInfo) {
            // ログイン中の場合
            console.log(authMenu);
            authMenu.textContent = "Logout";
            authMenu.href = "#";
            console.log(authMenu);

            // ログアウトのイベントリスナーを追加
            authMenu.addEventListener("click", () => {
                localStorage.removeItem("userInfo"); // ログイン情報を削除
                // UserStorage.clear(); // ユーザーストレージをクリア
                // sessionStorage.clear(); // セッション情報をクリア
                alert("ログアウトしました。");
                window.location.href = baseURL; // トップページへリダイレクト
            });
        } else {
            // ログアウト中の場合
            authMenu.textContent = "Login";
            authMenu.href = baseURL + "login/";
        }
    }

    // 初期化処理
    updateAuthMenu();

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




