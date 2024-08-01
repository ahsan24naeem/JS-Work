const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(form.querySelector('#height').value);
  const weight = parseInt(form.querySelector('#weight').value);

  const result = form.querySelector('#results');
  if (height === '' || isNaN(height) || height < 0) {
    /// height != NaN
    result.innerHTML = 'Inputs not Valid';
  } else if (weight === '' || isNaN(weight) || weight < 0) {
    /// height != NaN
    result.innerHTML = 'Inputs not Valid';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span> ${bmi} </span>`;
  }
});
