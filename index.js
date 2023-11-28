document.addEventListener("DOMContentLoaded", function() {
    myFunction();
});

function myFunction() {
    document.querySelector("#log-in-button").addEventListener("click", function() {
        var username = document.querySelector("#username").value;
        var password = document.querySelector("#password").value;
        var result = document.querySelector("#result");

        if (username === 'demo' && password === 'password') {
            result.innerHTML = "<p>Login Successful!</p>";
        } else {
            result.innerHTML = "<p>Login failed. Please check your username and password.</p>";
        }
    });
}
