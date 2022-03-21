var backdrop = document.querySelector('.backdrop');
// console.dir(backdrop);
var selectBtns = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
for (const btn of selectBtns) {
	btn.addEventListener('click', (event) => {
		modal.style.display = 'block';
		backdrop.style.display = 'block';
	});
}
