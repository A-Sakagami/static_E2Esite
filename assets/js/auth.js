window.addEventListener('message', function(event) {
  if (event.origin !== window.location.origin) {
    return;
  }

  const authData = event.data;
  const authButtons = document.getElementById('authButtons');
  authButtons.innerHTML = '';

  if (authData.isLoggedIn) {
    if (authData.role === 'admin') {
      const approveButton = document.createElement('button');
      approveButton.textContent = '承認';
      approveButton.onclick = function() {
        // Add your approve logic here
        alert('承認しました');
      };
      authButtons.appendChild(approveButton);

      const rejectButton = document.createElement('button');
      rejectButton.textContent = '否決';
      rejectButton.onclick = function() {
        // Add your reject logic here
        alert('否決しました');
      };
      authButtons.appendChild(rejectButton);
    } else {
      const textBox = document.createElement('textarea');
      textBox.placeholder = 'メッセージを入力してください';
      authButtons.appendChild(textBox);

      const submitButton = document.createElement('button');
      submitButton.textContent = '送信';
      submitButton.onclick = function() {
        // Add your submit logic here
        alert('メッセージが送信されました: ' + textBox.value);
      };
      authButtons.appendChild(submitButton);
    }

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'ログアウト';
    logoutButton.onclick = function() {
      window.location.href = '{{ .Site.BaseURL }}/logout/';
    };
    authButtons.appendChild(logoutButton);
  } else {
    const loginButton = document.createElement('button');
    loginButton.textContent = 'ログイン';
    loginButton.onclick = function() {
      window.location.href = '{{ .Site.BaseURL }}/login/';
    };
    authButtons.appendChild(loginButton);
  }
});

document.getElementById('authFrame').style.display = 'block';