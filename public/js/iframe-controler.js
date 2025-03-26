// ユーザー一覧を取得
function getUserInfoList() {
    const raw = localStorage.getItem('userInfo');
    return raw ? JSON.parse(raw) : [];
}

// 保存
function saveUserInfoList(data) {
    localStorage.setItem('userInfo', JSON.stringify(data));
}
