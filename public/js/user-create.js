window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('user-create'); // iFrameのIDを仮定
    if (!iframe || !iframe.contentWindow) {
        console.error('iFrameが見つかりません。');
        return;
    }

    iframe.onload = () => {
        console.log('[iframe onload] fired');

        const tryAccessIframe = () => {
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            if (!doc) {
                console.error('[iframe] 中のdocumentにアクセスできません。');
                return;
            }

            if (doc.readyState === 'complete') {
                console.log('[iframe] 読み込み完了:', doc.body);
                // ここで doc.querySelector などの操作が可能になります
            } else {
                console.log('[iframe] まだ読み込み中… 再チェックします');
                setTimeout(tryAccessIframe, 100); // 100ms 後に再試行
            }
        };

        tryAccessIframe();
    };

    iframe.addEventListener('load', () => {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const form = iframeDoc.getElementById('createUserForm');

        if (!form) {
            console.error('フォームがiFrame内に見つかりません。');
            return;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            clearErrors(iframeDoc);

            const role = iframeDoc.querySelector('input[name="role"]:checked')?.value;
            const username = iframeDoc.getElementById('username')?.value.trim();
            const password = iframeDoc.getElementById('password')?.value;

            let isValid = true;

            if (!username) {
                showError(iframeDoc, 'username', 'ユーザー名は必須項目です。');
                isValid = false;
            }

            if (!password) {
                showError(iframeDoc, 'password', 'パスワードは必須項目です。');
                isValid = false;
            } else if (password.length < 8 || password.length > 20) {
                showError(iframeDoc, 'password', 'パスワードは8文字以上20文字以下でなければなりません。');
                isValid = false;
            }

            if (isValid) {
                console.log('User created:', { role, username, password, isLoggedIn: false });
                saveUser({role, username, password, isLoggedIn: false });
                form.reset();
            }
        });
    });
});

function clearErrors(doc) {
    doc.querySelectorAll('.error-message').forEach(el => el.remove());
}

function showError(doc, inputId, message) {
    const input = doc.getElementById(inputId);
    if (input) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'red';
        error.textContent = message;
        input.after(error);
    }
}

function saveUser(user) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
    userInfo.push(user);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    console.log('User saved:', user);
}
