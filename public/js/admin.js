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
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin-bottom: 10px; background-color: #f9f9f9;">
            <span>${text}</span>
            <div>
            <button class="approve-btn" style="background-color: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; margin-right: 5px;">承認</button>
            <button class="deny-btn" style="background-color: #f44336; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">否認</button>
            </div>
        </div>
        `;
        storedStringsList.appendChild(li);

        li.querySelector(".approve-btn").addEventListener("click", () => {
        alert(`${text} が承認されました。`);
        // 承認処理をここに追加
        localStorage.setItem(key + "_approved", "true");
        });

        li.querySelector(".deny-btn").addEventListener("click", () => {
        alert(`${text} が否認されました。`);
        // 否認処理をここに追加
        localStorage.setItem(key + "_denied", "true");
        });
    }
    });
});

