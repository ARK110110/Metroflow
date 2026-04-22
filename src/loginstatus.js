function checkSession() {
  const email = sessionStorage.getItem("email");

  if (!email) {
    window.location.href = "login.html";
  } else {
    console.log("Valid");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  checkSession();
});
