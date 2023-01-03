const switchTheme = document.querySelector("#switch");

switchTheme.addEventListener("change", function (e) {
  //   console.log(e.target.checked);
  document.body.classList.toggle("dark-mode");
});
