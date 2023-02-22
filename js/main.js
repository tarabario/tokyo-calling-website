const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');

const slider = buttonPrev.parentElement.previousElementSibling.querySelector('.cards-slider');
const viewer = slider.parentElement;
const columnGap = slider.style.columnGap = '35px';
let cards = document.querySelectorAll('.card');

buttonPrev.addEventListener('click', () => {
	let lastCard = slider.lastElementChild;
	viewer.insertAdjacentHTML('afterbegin', lastCard.outerHTML);
	viewer.firstElementChild.style.position = 'absolute';
	viewer.firstElementChild.style.zIndex = '2';

	setTimeout(() => {
		viewer.firstElementChild.style.opacity = 0;
		slider.insertAdjacentHTML('beforeend', lastCard.outerHTML);
		firstCard.style.opacity = 0;
		lastCard.remove();
	}, 500)
})

buttonNext.addEventListener('click', () => {
	let firstCard = slider.firstElementChild;
	viewer.insertAdjacentHTML('afterbegin', firstCard.outerHTML);
	viewer.firstElementChild.style.position = 'absolute';
	viewer.firstElementChild.style.zIndex = '2';

	setTimeout(() => {
		viewer.firstElementChild.style.opacity = 0;
		slider.insertAdjacentHTML('beforeend', firstCard.outerHTML);
		firstCard.style.opacity = 0;
		firstCard.remove();
	}, 500)
})

