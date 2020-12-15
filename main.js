function imgSlider(selectedImg) {
  document.querySelector(".starbucks").src = selectedImg;
}
function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.backgroundColor = color;
}
function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
