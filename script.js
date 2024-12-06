document.getElementById("sign-up-btn").addEventListener("click", () => {
    document.getElementById("form-title").textContent = "Sign up here.";
    document.querySelectorAll(".sign-up").forEach(el => el.style.display = "flex");
    document.getElementById("sign-in-btn").style.display = "none";
    document.getElementById('info').style.display = "none";
    document.getElementById("sign-up-btn").textContent = "Submit!";
});

document.getElementById("sign-in-btn").addEventListener("click", () => {
    document.getElementById("form-title").textContent = "Sign in here.";
    document.querySelectorAll(".sign-up-only").forEach(el => el.style.display = "none");
    document.getElementById("sign-in-btn").style.display = "inline-block";
    document.getElementById("sign-up-btn").textContent = "Sign Up!";
});
