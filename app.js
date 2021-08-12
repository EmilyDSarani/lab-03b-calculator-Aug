import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';



const addInputEl1 = document.getElementById('add-input-1');
const addInputEl2 = document.getElementById('add-input-2');
const addButtonEl = document.getElementById('add-button');
const addResultEl = document.getElementById('add-result');

addButtonEl.addEventListener('click', ()=>{
    const dope1 = addInputEl1.value;
    const dope2 = addInputEl2.value;
    const sum = add (dope1, dope2);
    addResultEl.textContent = sum;

    
});

const subtractInputEl1 = document.getElementById('subtract-input-1');
const subtractInputEl2 = document.getElementById('subtract-input-2');
const subtractButtonEl = document.getElementById('subtract-button');
const subtractResultEl = document.getElementById('subtract-result');


subtractButtonEl.addEventListener('click', ()=>{
    const dope1 = subtractInputEl1.value;
    const dope2 = subtractInputEl2.value;
    const sum = subtract(dope1, dope2);
    subtractResultEl.textContent = sum;
});


const multiplyInputEl1 = document.getElementById('multiply-input-1');
const multiplyInputEl2 = document.getElementById('multiply-input-2');
const multiplyButtonEl = document.getElementById('multiply-button');
const multiplyResultEl = document.getElementById('multiply-result');


multiplyButtonEl.addEventListener('click', ()=>{
    const dope1 = multiplyInputEl1.value;
    const dope2 = multiplyInputEl2.value;
    const sum = multiply(dope1, dope2);
    multiplyResultEl.textContent = sum;
});

const divideInputEl1 = document.getElementById('divide-input-1');
const divideInputEl2 = document.getElementById('divide-input-2');
const divideButtonEl = document.getElementById('divide-button');
const divideResultEl = document.getElementById('divide-result');


divideButtonEl.addEventListener('click', ()=>{
    const dope1 = divideInputEl1.value;
    const dope2 = divideInputEl2.value;
    const sum = divide(dope1, dope2);
    divideResultEl.textContent = sum;
});