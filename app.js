const bars = document.querySelector(".bars");
const resNav = document.querySelector(".resNav");
bars.addEventListener("click", (e) => {
  resNav.classList.toggle("active");
  bars.style.opacity = "0";
});
document.addEventListener("click", () => {});
document.addEventListener("click", function (event) {
  var navbar = resNav;
  var toggleBtn = bars;
  if (!navbar.contains(event.target) && event.target !== toggleBtn) {
    resNav.classList.remove("active");
    bars.style.opacity = "1";
  }
});