const ids = [];
const btnShow = document.getElementById('btnShow');
const container = document.querySelector('#out');

function fillIds(target) {
  if (!target || target === 'btnShow') {
    return;
  } else {
    ids.push(target);
    console.log(ids);
  }
  return ids;
}

function showAllIds(arr) {
  container.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    const span = document.createElement('span');
    span.textContent = arr[i];
    container.appendChild(span);
  }
}

document.addEventListener('click', (e) => {
  const id = e.target.id;
  fillIds(id);
});

btnShow.addEventListener('click', () => {
  showAllIds(ids);
});
