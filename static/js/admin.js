document.addEventListener("DOMContentLoaded", () => {
    // ログイン状態をチェック
    const userType = localStorage.getItem("userType");

    if (userType !== "admin") {
        // 管理者でない場合、ログインページにリダイレクト
        alert("管理者権限が必要です。ログインしてください。");
        window.location.href = baseURL + "login/";
    }

    // 投稿を表示
    processAllStoredPosts();
});

/**
 * ローカルストレージのすべての投稿を取得し、個別に処理
 */
function processAllStoredPosts() {
    const storedStringsList = document.getElementById("storedStringsList");

    // 既存のリスト要素をクリア
    storedStringsList.innerHTML = "";

    // ローカルストレージから投稿データを取得
    const posts = getPostsFromStorage();

    // 各投稿を個別に処理
    posts.forEach((post, index) => {
        console.log(`投稿 ${index + 1}:`, post);

        // リストアイテムを作成
        const listItem = createListItem(post, index);
        storedStringsList.appendChild(listItem);
    });
}

/**
 * ローカルストレージから投稿データを取得
 */
function getPostsFromStorage() {
    try {
        const storedData = localStorage.getItem("posts");
        const posts = JSON.parse(storedData);

        if (!Array.isArray(posts)) {
            console.warn("投稿データが配列形式ではありません。初期化します。");
            return [];
        }

        return posts;
    } catch (error) {
        console.error("ローカルストレージから投稿データの取得中にエラーが発生しました:", error);
        return [];
    }
}

/**
 * リストアイテムを作成
 */
function createListItem(post, index) {
    const li = document.createElement("li");

    li.innerHTML = 
        `<div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin-bottom: 10px;">
            <span>投稿 ${index + 1}: ${post.content}</span>
            <div>
                <button class="approve-btn" style="background-color: #88cb7f; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; margin-right: 5px;">承認</button>
                <button class="deny-btn" style="background-color: #f44336; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">否認</button>
            </div>
        </div>`;

    // ボタンイベントリスナーの追加
    li.querySelector(".approve-btn").addEventListener("click", () => handleApproval(post, index));
    li.querySelector(".deny-btn").addEventListener("click", () => handleDenial(post, index));

    return li;
}

/**
 * 承認ボタンの処理
 */
function handleApproval(post, index) {
    const posts = getPostsFromStorage();

    // 投稿を正しく更新
    posts[index].approved = true;
    posts[index].denyed = false; // 否認をリセット

    // 更新後のデータをローカルストレージに保存
    savePostsToStorage(posts);

    alert(`投稿 ${index + 1}: ${post.content} が承認されました。`);

    // 表示を更新
    processAllStoredPosts();
}

/**
 * 否認ボタンの処理
 */
function handleDenial(post, index) {
    const posts = getPostsFromStorage();

    // 投稿を正しく更新
    posts[index].denyed = true;
    posts[index].approved = false; // 承認をリセット

    // 更新後のデータをローカルストレージに保存
    savePostsToStorage(posts);

    alert(`投稿 ${index + 1}: ${post.content} が否認されました。`);

    // 表示を更新
    processAllStoredPosts();
}

/**
 * 投稿データをローカルストレージに保存
 */
function savePostsToStorage(posts) {
    if (Array.isArray(posts)) {
        localStorage.setItem("posts", JSON.stringify(posts));
    } else {
        console.error("保存するデータが配列ではありません。");
    }
}