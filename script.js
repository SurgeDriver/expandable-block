var swiper = new Swiper(".mySwiper", {
  width: 240,
  spaceBetween: 16,
  grabCursor: true,
  // slidesPerView: 'auto',

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

/* 

gridItems - элементы грида.
toggleButton - кнопка скрыть \ показать.

При нажатии на кнопку должен меняться режим отображения (все или некоторые)

По умолчанию на пк виндно 8 элементов, а на планшете 6.
Независимо от состояния, при изменении размера окна
список не должен скрываться, но должен меняться лимит элементов - 6 или 8.

Есть класс hidden который скрывает элемент.


*/