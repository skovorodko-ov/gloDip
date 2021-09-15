'use strict';

const sendForm = () => {
  const forms = document.querySelectorAll('form'),
    popupThanks = document.querySelector('.popup-thank');

  popupThanks.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('popup-thank') || target.classList.contains('close')) {
      popupThanks.removeAttribute('style');
    }
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
      },
    body: JSON.stringify(body)
    });
  };


  const sendingForm = (id) => {
    const form = document.getElementById(id),
      checkbox = form.querySelector('.checkbox__input');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!checkbox.checked) {
        return;
      }

      const formData = new FormData(form);

      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      for (let key in body) {
        if (!body[key]) {
          return;
        }
      }

      const success = (response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200.');
        }
        popupThanks.style.visibility = 'visible';
      };  

      const error = (e) => {
        console.warn(e);
      };

      const clearFormInputs = () => {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(elem => {
          elem.value = '';
          if (elem.checked) {
            elem.checked = false;
          }
        });
      }

      (async () => {
        try {
          const responce = await postData(body);
          success(responce);
          clearFormInputs();
        } catch(e) {
          error(e);
        }
      })();
    });
  };
  
  forms.forEach(elem => {
    sendingForm(elem.id);
  });
};

export default sendForm;