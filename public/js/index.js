document.addEventListener("DOMContentLoaded", () => {
    initializeUserView();
    setupPostHandlers();
});

/**
 * ユーザー表示の初期化
 * ユーザーの種類に応じた表示を切り替える処理を一つの関数にまとめました
 */
function initializeUserView() {
    const loginButton = getElement("login-button");
    const loginScreen = getElement("login-screen");
    const userArea = getElement("user-area");
    const postList = getElement("post-list");
    const userType = localStorage.getItem("userType");

    switch (userType) {
        case "admin":
            navigateToAdmin();
            break;
        case "user":
            showUserArea(loginScreen, userArea, postList);
            break;
        default:
            setupLoginButton(loginButton);
            break;
    }
}

/**
 * 投稿関連のハンドラーを設定
 */
function setupPostHandlers() {
    const sendPostButton = getElement("send-post");
    sendPostButton.addEventListener("click", handlePostSubmission);

    displayPosts(); // 初期表示
}

/**
 * 管理者画面に遷移
 */
function navigateToAdmin() {
    window.location.href = `${baseURL}admin/`;
}

/**
 * ユーザーエリアを表示
 */
function showUserArea(loginScreen, userArea, postList) {
    if (loginScreen) loginScreen.style.display = "none";
    if (userArea) userArea.style.display = "block";
    if (postList) postList.style.display = "block";
}

/**
 * ログインボタンの設定
 */
function setupLoginButton(loginButton) {
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            window.location.href = `${baseURL}login/`;
        });
    } else {
        logError("login-button が見つかりませんでした");
    }
}

/**
 * 投稿を処理
 * ストレージ内容を確認する場合：localStorage.removeItem("posts");
 */
function handlePostSubmission(event) {
    event.preventDefault();
    const postInput = getElement("postInput").value;
    if (postInput) {
        // ローカルストレージから投稿を取得、空配列をデフォルト値として設定
        let posts = JSON.parse(localStorage.getItem("posts") || "[]");

        // 新しい投稿を追加
        const newPost = {
            content: postInput,
            approved: false,
            denyed: false,
        };

        posts.push(newPost); // 配列に追加
        localStorage.setItem("posts", JSON.stringify(posts)); // 保存

        displayPosts(); // 投稿を再表示
        getElement("postInput").value = ""; // 入力フィールドをクリア
    }
}

/**
 * 投稿を表示
 */
function displayPosts() {
    const postList = getElement("post-list");
    postList.innerHTML = "";
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach((post, index) => {
        const postItem = document.createElement("div");
        postItem.id = `post-${index}`;
        postItem.className = "user-post";
        postItem.textContent = post.content;
        postItem.style.backgroundColor = getPostBackgroundColor(post);
        postList.appendChild(postItem);
    });

    displayUserElements();
}

/**
 * 投稿の背景色を取得
 */
function getPostBackgroundColor(post) {
    if (post.approved) return "lightgreen";
    if (post.denyed) return "lightcoral";
    return "lightblue";
}

/**
 * ユーザー用の要素を表示
 */
function displayUserElements() {
    toggleElementVisibility("userForm", true);
    toggleElementVisibility("userDiv", true);
}

/**
 * 要素の表示・非表示を切り替え
 */
function toggleElementVisibility(elementId, isVisible) {
    const element = getElement(elementId);
    if (element) {
        element.style.display = isVisible ? "block" : "none";
    } else {
        logError(`${elementId} が見つかりません`);
    }
}

/**
 * 要素を取得
 */
function getElement(id) {
    return document.getElementById(id);
}

/**
 * エラーをログ出力
 */
function logError(message) {
    console.error(message);
}
