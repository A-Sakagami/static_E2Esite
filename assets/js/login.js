window.addEventListener('message', function(event) {
    if (event.origin !== window.location.origin) {
      return;
    }
  
    const authData = event.data;
    const authLink = document.getElementById('authLink');
  
    if (authData.isLoggedIn) {
      authLink.innerHTML = '<a href="BASE_URL/logout/">ログアウト</a>';
    } else {
      authLink.innerHTML = '<a href="BASE_URL/login/">ログイン</a>';
    }
  });
  
  document.getElementById('authFrame').style.display = 'block';