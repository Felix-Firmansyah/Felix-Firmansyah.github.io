const all_button = document.querySelectorAll('.btn');

let i = 0;

for (i; i < all_button.length; i++) {
	all_button[i].addEventListener('click', () => {
		const sounds = new Audio('sounds/click.wav');
		sounds.play();
	});
}

/*==================== FORM FUNCITON ====================*/ 
const scriptURL = 'https://script.google.com/macros/s/AKfycbw-Lnl8csNBBO8-wBsYxIDmlsoaBEYEISmVBb4of1iunb0PJTqFRmu-S_k6HBP-Z5q2nQ/exec'
const form = document.forms['contact-my-website']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const btnDAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
e.preventDefault()
// ketika tombol submit di klik 
// tampilkan tombol loading , hilangkan tombol kirim
btnLoading.classList.toggle("d-none");
btnKirim.classList.toggle("d-none");
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    // tampilkan tombol kirim , hilangkan tombol loading
    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    // tampilkan alert
    btnDAlert.classList.toggle('d-none');
    // reset tulisan input form nya
    form.reset()
    console.log('Success!', response)})
  .catch(error => console.error('Error!', error.message))
})
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

