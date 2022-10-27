import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let values: [string, string, number] = [
		tofrom.value,
		details.value,
		amount.valueAsNumber,
	];

	let doc: HasFormatter =
		type.value === 'invoice' ? new Invoice(...values) : new Payment(...values);

	list.render(doc, type.value, 'end');
});
