const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (b) {
    console.log(b);
    console.log(b.target);
    body.style.backgroundColor = b.target.id;
  });
});
