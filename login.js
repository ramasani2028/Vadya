    document.addEventListener('DOMContentLoaded', () => {
        if (sessionStorage.getItem('loggedInUser')) {
            window.location.href = 'home.html';
        }

        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let rememberMe = document.getElementById("rememberMe").checked;
            let errorMsg = document.getElementById("errorMsg");
            errorMsg.textContent = "";

            if (!username || !password) {
                alert("Please fill in both username and password.");
                return;
            }

            if (!/^[a-zA-Z0-9]+$/.test(username)) {
                alert("Username can only contain alphanumeric characters.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            let validUser = storedUsers.find(user => user.username === username && user.password === password);

            if (validUser) {
                sessionStorage.setItem("loggedInUser", username);

                if (rememberMe) {
                    localStorage.setItem("rememberMeUser", username);
                } else {
                    localStorage.removeItem("rememberMeUser");
                }

                window.location.href = "index.html"; 
            } else {
                alert("Invalid credentials. Please check your details or register.");
            }
        });

        document.querySelector('.bg-toggle').addEventListener('click', () => {
            const bgToggleButton = document.querySelector('.bg-toggle img');
            if (document.body.style.background.includes('piano.jpeg')) {
                document.body.style.background = "url('guitar.jpg') no-repeat center center/cover";
                bgToggleButton.src = 'https://img.icons8.com/ios-filled/50/000000/piano.png';
            } else {
                document.body.style.background = "url('piano.jpeg') no-repeat center center/cover";
                bgToggleButton.src = 'https://img.icons8.com/ios-filled/50/000000/guitar.png';
            }
        });
    });