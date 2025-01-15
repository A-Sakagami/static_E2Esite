// ユーザー別の表示分けJavascript
// 初期化
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const loginScreen = document.getElementById("login-screen");
    const userArea = document.getElementById("user-area");
    const postList = document.getElementById("post-list");

    // ログイン種別の取得
    const userType = localStorage.getItem("userType");

    if (userType === "admin") {
        // 管理者用エリアを表示
        window.location.href = baseURL + "admin/"; // admin.html に遷移
    } else if (userType === "user") {
        // 一般ユーザー用エリアを表示
        loginScreen.style.display = "none";
        userArea.style.display = "block";
        postList.style.display = "block";
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

document.addEventListener("DOMContentLoaded", () => {
    // 初期表示時に投稿を表示
    displayPosts();

    // ローカルストレージに文字列を保存・一覧として表示
    document.getElementById('send-post').addEventListener('click', function(event) {
        event.preventDefault();
        const postInput = document.getElementById('postInput').value;
        if (postInput) {
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push(postInput);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
            document.getElementById('postInput').value = '';
            displayUserElements(); // 要素を表示
        }
    });

    // ローカル・ストレージから投稿を取得し、'post-list'要素に表示
    function displayPosts() {
        const postList = document.getElementById('post-list');
        postList.innerHTML = '';
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        if (posts.length > 0) {
            posts.forEach(function(post, index) {
                const postItem = document.createElement('div');
                postItem.id = 'post-' + index;
                postItem.className = 'user-post';
                postItem.textContent = post.text;

                if (post.approved) {
                    postItem.style.backgroundColor = 'lightgreen';
                } else if (post.denyed) {
                    postItem.style.backgroundColor = 'lightcoral';
                }

                postList.appendChild(postItem);
            });
            displayUserElements(); // 要素を表示
        }
    }
});