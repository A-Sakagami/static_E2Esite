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
/** 
 * ローカルストレージに文字列を保存・一覧として表示 
 */
document.getElementById('send-post').addEventListener('click', function(event) {
    event.preventDefault();
    const postInput = document.getElementById('postInput').value;
    if (postInput) {
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(postInput);
      localStorage.setItem('posts', JSON.stringify(posts));
      displayPosts();
      document.getElementById('postInput').value = '';
    }
  });

  /**
  * ローカル・ストレージから投稿を取得し、'post-list'要素に表示します。
  * 現在の 'post-list' の内容をクリアし、各投稿に対して新しい div 要素を作成します。
  * 各投稿にはidとクラス名が割り当てられ、'post-list'に追加されます。
  */
  function displayPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(function(post) {
    const postItem = document.createElement('div');
    postItem.id = 'post-' + posts.indexOf(post);
    postItem.className = 'user-post';
      postItem.textContent = post;
      postList.appendChild(postItem);
    });
  }

  // DOM読み込み完了後に関数を実行する
  document.addEventListener('DOMContentLoaded', function() {
    displayPosts();
  });
