const form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const nameInput = form.elements['name'];
    const emailInput = form.elements['email'];
    const passwordInput = form.elements['password'];

    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');

    if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('error');
    }
    if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
        isValid = false;
        emailInput.classList.add('error');
    }
    if (passwordInput.value.trim() === '' || passwordInput.value.length < 6) {
        isValid = false;
        passwordInput.classList.add('error');
    }

    if (isValid) {
        alert('Registration successful!');
        // save simple cookies (add path and expiration as needed)
        document.cookie = 'name=' + encodeURIComponent(nameInput.value) + '; path=/';
        document.cookie = 'email=' + encodeURIComponent(emailInput.value) + '; path=/';
        document.cookie = 'password=' + encodeURIComponent(passwordInput.value) + '; path=/';
        form.reset();
    }
    else {
        alert('Please fill in all fields correctly');
    }
    
    function getCookie(name) {

        const cookies = document.cookie.split("; ");

        for (let cookie of cookies) {

            let [key, value] = cookie.split("=");

            if (key === name) {
            return decodeURIComponent(value);
            }
        }
        return null;
    }
    const userName = getCookie("name");
    if (userName) {
    console.log("Existing user:", userName);
    }
});
document.getElementById("logoutBtn")
    .addEventListener("click", function() {
        
        document.cookie =
            "name=; expires=-1; path=/;";

        document.cookie =
            "email=; expires=-1; path=/;";

        document.cookie =
            "password=; expires=-1; path=/;";

        alert("You have logged out of your account");
    });