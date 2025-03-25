document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.remove();
    });

    if (!username) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'red';
        error.textContent = 'ユーザー名は必須項目です。';
        document.getElementById('username').after(error);
        valid = false;
    }

    if (!password) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'red';
        error.textContent = 'パスワードは必須項目です。';
        document.getElementById('password').after(error);
        valid = false;
    }

    if (valid) {
        // Here you would typically send the data to the server
        console.log('ユーザー名:', username);
        console.log('パスワード:', password);
        
        // Clear the form
        document.getElementById('createUserForm').reset();
    }
});