document.addEventListener('DOMContentLoaded', () => {
    initializeDefaultAccounts();
});

/**
 * デフォルトアカウントを userInfo に登録（未登録の場合のみ）
 */
function initializeDefaultAccounts() {
    const existingAccounts = getUserInfoList();
    if (!existingAccounts.length) {
        const defaultAccounts = [
            { userType: "user", username: "user", password: "userpass1234" },
            { userType: "admin", username: "admin", password: "adminpass1234" }
        ];
        saveUserInfoList(defaultAccounts);
        console.log("[default-user-setup] デフォルトアカウントを登録しました");
    }
}

/**
 * userInfo を取得（存在しなければ空配列）
 */
function getUserInfoList() {
    try {
        return JSON.parse(localStorage.getItem("userInfo")) || [];
    } catch {
        return [];
    }
}

/**
 * userInfo を保存
 */
function saveUserInfoList(accounts) {
    localStorage.setItem("userInfo", JSON.stringify(accounts));
}
