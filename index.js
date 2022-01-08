const all_button = document.querySelectorAll('.btn');

let i = 0;

for (i; i < all_button.length; i++) {
	all_button[i].addEventListener('click', () => {
		const sounds = new Audio('sounds/click.wav');
		sounds.play();
	});
}
