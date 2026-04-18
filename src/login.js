async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const response = await fetch("../assets/json/dataLogin.json");
  const data = await response.json();
  let berhasil = false;
  for (let i = 0; i < data.length; i++) {
    if (email === data[i].email && password === data[i].password) {
      // simpan email ke session
      sessionStorage.setItem("email", data[i].email);
      berhasil = true;
      // redirect ke dashboard
      window.location.href = "home.html";
      break;
    }
  }
  if (!berhasil) {
    alert("email atau password salah!");
  }
}
