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

  document.addEventListener('DOMContentLoaded', function() {
    displayPosts();
  });
