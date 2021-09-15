'use strict';

const inputName = document.getElementById('name'),
  inputPassword = document.getElementById('type'),
  form = document.querySelector('form'),
  warnings = document.querySelectorAll('.text-warning');

let checkName = false,
  checkPass = false;

warnings.forEach(elem => {
  elem.style.display = 'none';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  warnings.forEach(elem => {
    elem.style.display = 'none';
  });


  if (inputName.value !== 'admin') {
    warnings[0].style.display = 'block';
    inputName.value = '';
    inputPassword.value = '';
    return;
  } else {
    checkName = true;
  }
  if (inputPassword.value !== 'admin') {
    warnings[1].style.display = 'block';
    inputPassword.value = '';
    return;
  } else {
    checkPass = true;
  }

  if (checkPass && checkName) {
    document.cookie = `user=${inputName.value}`;
    document.cookie = `pass=${inputPassword.value}`;
    window.location.href = 'table.html';
  }
});