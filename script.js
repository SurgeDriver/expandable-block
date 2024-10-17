var swiper = new Swiper(".mySwiper", {
  width: 240,
  spaceBetween: 16,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const gridItems = document.querySelectorAll('.services li');
const toggleButton = document.querySelector('.services__expand-button');
let isExpanded = false;
let limit = 6;

function updateWithLimit() {
  gridItems.forEach((item, index) => { item.classList.remove('hidden'); });
  for (let i = limit; i < gridItems.length; i++) {
    gridItems[i].classList.add('hidden');
  }
}

function screenChanged() {
  limit = window.innerWidth <= 1120 ? 6 : 8;
  if (!isExpanded) {
    updateWithLimit();
  }
}
updateWithLimit();
window.addEventListener('resize', screenChanged);

function showHide() {
  isExpanded = !isExpanded;
  toggleButton.textContent = isExpanded ? "Скрыть" : "Показать все";
  for (let i = limit; i < gridItems.length; i++) {
    gridItems[i].classList.toggle('hidden');
  }
}
toggleButton.addEventListener('click', showHide);