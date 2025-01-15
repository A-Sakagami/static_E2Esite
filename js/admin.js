document.addEventListener("DOMContentLoaded", () => {
    // ログイン状態をチェック
    const userType = localStorage.getItem("userType");

    if (userType !== "admin") {
        // 管理者でない場合、ログインページにリダイレクト
        alert("管理者権限が必要です。ログインしてください。");
        window.location.href = baseURL + "login/";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const storedStringsList = document.getElementById("storedStringsList");
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
    if (key.startsWith("posts")) {
        const li = document.createElement("li");
        const text = localStorage.getItem(key);
        li.innerHTML = `
        ${text}
        <button class="approve-btn">承認</button>
        <button class="deny-btn">否認</button>
        `;
        storedStringsList.appendChild(li);

        li.querySelector(".approve-btn").addEventListener("click", () => {
        alert(`${text} が承認されました。`);
        // 承認処理をここに追加
        });

        li.querySelector(".deny-btn").addEventListener("click", () => {
        alert(`${text} が否認されました。`);
        // 否認処理をここに追加
        });
    }
    });
});

