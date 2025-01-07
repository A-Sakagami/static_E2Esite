window.addEventListener('message', function(event) {
    if (event.origin !== window.location.origin) {
      return;
    }
  
    const authData = event.data;
    const authButtons = document.getElementById('authButtons');
    authButtons.innerHTML = '';
  
    if (authData.isLoggedIn) {
      if (authData.role === 'admin') {
        const adminButton = document.createElement('button');
        adminButton.textContent = '管理者ページ';
        adminButton.onclick = function() {
          window.location.href = '{{ .Site.BaseURL }}/admin/';
        };
        authButtons.appendChild(adminButton);
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