    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("registerForm").addEventListener("submit", function (event) {
            event.preventDefault();
            
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            let errorMsg = document.getElementById("errorMsg");
            
            errorMsg.textContent = "";
            
            if (!username || !email || !password || !confirmPassword) {
                alert("Please fill in all fields.");
                return;
            }
            
            if (!/^[a-zA-Z0-9]+$/.test(username)) {
                alert("Username can only contain alphanumeric characters.");
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Invalid email format.");
                return;
            }
            
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }
            
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
            
            let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            
            if (storedUsers.some(user => user.username === username)) {
                alert("Username already exists. Choose another one.");
                return;
            }
            
            storedUsers.push({ username, email, password });
            localStorage.setItem("users", JSON.stringify(storedUsers));
            
            alert("Registration successful! Redirecting to login page...");
            localStorage.setItem("registeredUser", JSON.stringify({ username, password }));
            window.location.href = "login.html";
        });

        document.querySelector('.bg-toggle').addEventListener('click', () => {
            const bgToggleButton = document.querySelector('.bg-toggle img');
            if (document.body.style.background.includes('flute.webp')) {
                document.body.style.background = "url('violin.jpg') no-repeat center center/cover";
                bgToggleButton.src = 'https://img.icons8.com/ios-filled/50/000000/flute.png';
            } else {
                document.body.style.background = "url('flute.webp') no-repeat center center/cover";
                bgToggleButton.src = 'https://img.icons8.com/ios-filled/50/000000/violin.png';
            }
        });
    });