import { fillCEP } from './components/components';
import { fetchAPI } from './fetchAPI/API';
import './style.css';

const input = document.querySelector('#input-number');
const btnSearch = document.querySelector('#btn-search');

btnSearch.addEventListener('click', (event) => {
  event.preventDefault();
  const cepNumber = input.value;
  fetchAPI(cepNumber).then((data) => {
    fillCEP(data);
  });
});
