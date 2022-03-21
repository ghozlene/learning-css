var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
// console.dir(backdrop);
var modalNoButton = document.querySelector('.modal__action--negative');
var selectBtns = document.querySelectorAll('.plan button');

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (const btn of selectBtns) {
	btn.addEventListener('click', () => {
		modal.style.display = 'block';
		backdrop.style.display = 'block';
	});
}
backdrop.addEventListener('click', () => {
	mobileNav.style.display = 'none';
	closeModal();
});
modalNoButton.addEventListener('click', closeModal);

function closeModal() {
	backdrop.style.display = 'none';
	modal.style.display = 'nome';
}

toggleButton.addEventListener('click', () => {
	mobileNav.style.display = 'block';
	backdrop.style.display = 'block';
});
