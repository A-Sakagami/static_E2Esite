window.addEventListener('message', function(event) {
    if (event.origin !== window.location.origin) {
      return;
    }

    const authData = event.data;
    const authLink = document.getElementById('authLink');

    if (authData.isLoggedIn) {
      authLink.innerHTML = '<a href="{{ .Site.BaseURL }}login/">ログイン</a>';
    } else {
      authLink.innerHTML = '<a href="{{ .Site.BaseURL }}logout/">ログアウト</a>';
    }
  });

  document.getElementById('authFrame').style.display = 'block';