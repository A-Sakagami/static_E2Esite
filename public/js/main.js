document.addEventListener("DOMContentLoaded", () => {
    // ログイン・ログアウトの出し分け処理
    const authMenu = document.getElementById("auth-menu");

    if (authMenu) {
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

        updateAuthMenu();
    } else {
        console.error("authMenu が見つかりません");
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

    // ログイン状態をチェックしてformとdiv要素を表示
    const userType = localStorage.getItem("userType");
    if (userType === "user") {
        displayUserElements();
    }

    // ユーザー用の要素を表示する関数
    function displayUserElements() {
        const userForm = document.getElementById("userForm");
        const userDiv = document.getElementById("userDiv");
        if (userForm) {
            userForm.style.display = "block";
        } else {
            console.error("userForm が見つかりません");
        }
        if (userDiv) {
            userDiv.style.display = "block";
        } else {
            console.error("userDiv が見つかりません");
        }
    }
});