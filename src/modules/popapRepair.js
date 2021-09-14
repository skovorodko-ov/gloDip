'use strict';

const popapRepair = () => {

  const popupRepairTypes = document.querySelector('.popup-repair-types'),
    navListPopupRepair = popupRepairTypes.querySelector('.nav-list-popup-repair'),
    tbody = popupRepairTypes.querySelector('tbody');

  const style = document.createElement('style');
    style.innerHTML = `
      .activeType {
        font-weight: bold;
      }
    `;
  document.head.append(style);

  const getDataFromServer = () => {
    return fetch('../crm-backend/db.json');
  };

  const createData = (response) => {
    const data = JSON.parse(response);
    return data;
  };

  const getType = (data) => {
    let arrType = [];

    data.forEach(elem => {
      arrType.push(elem.type);
    });
    arrType = new Set(arrType);

    arrType.forEach(item => {
      const buttonType = document.createElement('button');
      buttonType.classList.add('button_o'); // у кнопок есть класс актив!!!
      buttonType.classList.add('popup-repair-types-nav__item');
      buttonType.innerText = item;
      navListPopupRepair.append(buttonType);
    });

    const buttonsType = navListPopupRepair.querySelectorAll('button');
      buttonsType[0].classList.add('activeType');

    return data;
  };

  const createlist = (data) => {

    const createTr = (elem) => {
      const tr = document.createElement('tr');
      tr.classList.add('mobile-row');
      tr.innerHTML = `
        <td class="repair-types-name">${elem.name}</td>
				<td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
				<td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
				<td class="repair-types-value">${elem.units}</td>
				<td class="repair-types-value">${elem.cost} руб.</td>
      `;
      tbody.append(tr);
    };

    const buttonsType = navListPopupRepair.querySelectorAll('button');

    data.forEach(elem => {
      if (elem.type === buttonsType[0].textContent) {
        createTr(elem);
      }
    });

    navListPopupRepair.addEventListener('click', (event) => {
      let target = event.target;

      if (target.tagName === 'BUTTON') {
        buttonsType.forEach(elem => {
          elem.classList.remove('activeType');
          target.classList.add('activeType');
        });
      }

      tbody.innerHTML = '';
      data.forEach(elem => {
        if (elem.type === target.textContent) {
          createTr(elem);
        }
      });
    });

  }; 

  getDataFromServer()
    .then(response => {
      if (response.status !== 200) {
        throw new Error('status networn not 200');
      }
      return response.text();
    })
    .then(createData)
    .then(getType)
    .then(createlist);
};

export default popapRepair;