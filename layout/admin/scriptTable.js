'use strict';

const tbody = document.getElementById('tbody'),
  typeItem = document.getElementById('typeItem'),
  modal = document.getElementById('modal'),
  btnAddItem = document.querySelector('.btn-addItem'),
  inputsModal = modal.querySelectorAll('input'),
  form = modal.querySelector('form');

const createdElem = (id, type, name, units, cost) => {
  const tr = document.createElement('tr');
  tr.classList.add('table__row');
  tr.innerHTML = `
    <td class="table__id table__cell">${id}</td>
		<td class="table-type table__cell">${type}</td>
		<td class="table-name table__cell">${name}</td>
		<td class="table-units table__cell">${units}</td>
		<td class="table-cost table__cell">${cost} руб</td><td>
			<div class="table__actions table__cell">
				<button class="button action-change">
        <span class="svg_ui">
        <svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg>
        </span><span>Изменить</span>
				</button>
				<button class="button action-remove">
        <span class="svg_ui">
        <svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span>
        <span>Удалить</span>
				</button>
			</div>
		</td>
  `;
  tbody.append(tr);
};

const getData = (typeResponse = 'GET') => {
  
  return fetch('http://localhost:3000/api/items', {
    method: typeResponse,
    headers: {
      'Content-Type': 'aplication/json',
    },
  });
};

const parseData = (response) => {
  const data = JSON.parse(response);
  return data;
};

const tableDefault = (data) => {
  data.forEach(elem => {
    createdElem(elem.id, elem.type, elem.name, elem.units, elem.cost);
  });
  return data;
};

const createSelect = (data) => {
  let arrType = [];
  data.forEach(item => {
    arrType.push(item.type);
  });
  arrType = new Set(arrType);

  arrType.forEach(item => {
    const option = document.createElement('option');
    option.setAttribute('value', item);
    option.textContent = item;
    typeItem.append(option);
  });
};

const filterSelect = () => {
  typeItem.addEventListener('change', (event) => {
    let target = event.target;
    const itemsTable = tbody.querySelectorAll('.table__row');
    itemsTable.forEach(elem => {
      elem.style.display = 'table-row';
    });
    itemsTable.forEach(elem => {
      if (target.value !== elem.children[1].textContent) {
        elem.style.display = 'none';
      }
      if (target.value === 'Все услуги') {
        itemsTable.forEach(elem => {
          elem.style.display = 'table-row';
        });
      }
    });
  });
};

const popup = () => {
  btnAddItem.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  modal.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('modal__overlay') || 
    target.classList.contains('button__close') || target.classList.contains('svg_ui') ||
    target.classList.contains('icon__close') || target.parentNode.classList.contains('icon__close') ||
    target.parentNode.classList.contains('cancel-button')) {
      inputsModal.forEach(item => {
        item.value = '';
        item.removeAttribute('style');
      });
      modal.style.display = 'none';
    }
  });
};

const addService = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formsInput = form.querySelectorAll('input');

    formsInput.forEach(elem => {
      if (!elem.value) {
        elem.style.border = 'solid 2px red';
        return;
      }
    });

    console.dir(formsInput);

    let objBody = {};
    formsInput.forEach(elem => {
      objBody[elem.id] = elem.value;
    });


  const postService = () => {  
    return fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify(objBody)
    });
  };

  const success = (response) => {
    if (response.ok) {
      modal.style.display = 'none';
      inputsModal.forEach(item => {
        item.value = '';
      });
      getData().then(response => {
        if (response.status !== 200) {
          throw new Error('server not status 200!');
        } else {
          return response.text();
        }
      })
      .then(parseData).then(tableDefault).then(createSelect).catch(error => console.warn(error));
    } else {
      throw new Error('status network not 200');
    }
  };

  (async () => {
    try {
      const response = await postService();
      success(response);
    } catch(e) {
      console.warn(e);
    }
  })();
  });
};

getData().then(response => {
  if (response.status !== 200) {
    throw new Error('server not status 200!');
  } else {
    return response.text();
  }
})
.then(parseData).then(tableDefault).then(createSelect).catch(error => console.warn(error));

filterSelect();
popup();
addService();