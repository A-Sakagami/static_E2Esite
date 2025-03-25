document.addEventListener('DOMContentLoaded', () => {
    const defaultAccounts = [
        { userType: "user", username: "user", password: "userpass1234" },
        { userType: "admin", username: "admin", password: "adminpass1234" }
    ];

    // すでに保存されていなければ、プリセットアカウント配列を保存
    if (!localStorage.getItem("userInfo")) {
        localStorage.setItem("userInfo", JSON.stringify(defaultAccounts));
    }

    // フォーム送信時に新しいアカウントを追加（重複チェック付き）
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        const newAccount = {
            username: usernameInput.value,
            password: passwordInput.value
        };

        const accounts = JSON.parse(localStorage.getItem("userInfo")) || [];

        // すでに同じユーザー名があるか確認
        const exists = accounts.some(account => account.username === newAccount.username);

        if (!exists) {
            accounts.push(newAccount);
            localStorage.setItem("userInfo", JSON.stringify(accounts));
        }
    });
});
