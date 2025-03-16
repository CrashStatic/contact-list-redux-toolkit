import { validateForm, showError } from './validat.js';
import { Counter } from './counter.js';
import { COLUMN_ELEMENT_SELECTOR,
  CONTACT_CLEAR_BTN,
  CONTACT_SEARCH_BTN,
  CONTACTS_SELECTOR,
  COUNTER_SELECTOR,
  FORM_BTNS,
  FORM_ERROR,
  FORM_NAME_ID,
  FORM_PHONE_ID,
  FORM_POSITION_ID,
  FORM_SELECTOR } from './constants.js';
import { openSearchModal } from './search.js';
import {ContactInfo} from '../types/contact';
import {Validate} from '../types/validate';
import {clearAllContacts as clearAllContactsAction} from '../store/slices/contact-slice.ts';
import {store} from '../store/store.ts';
import {addContact} from './contact.ts';

const nameInput = document.getElementById(FORM_NAME_ID) as HTMLInputElement;
const positionInput = document.getElementById(FORM_POSITION_ID) as HTMLInputElement;
const phoneInput = document.getElementById(FORM_PHONE_ID) as HTMLInputElement;

function addContactToList(): void {
  const name = nameInput.value.trim();
  const position = positionInput.value.trim();
  const phone = phoneInput.value.trim();

  const errorMessage = document.querySelector(FORM_ERROR) as HTMLElement;
  const inputs = [nameInput, positionInput, phoneInput];

  // Валидация
  const storage: ContactInfo[] = store.getState().contacts.contacts; // Получаем контакты из Redux store
  const { isValid, errors }: Validate = validateForm({ inputs, storage, errorMessage });

  if (!isValid) {
    // Если есть ошибки, отображаем их
    errors.forEach(({ input, message }) => {
      if (input) {
        showError(input, errorMessage, message);
      } else {
        errorMessage.textContent = message;
      }
    });
    return;
  }

  const contact = {name, position, phone};

  addContact({contact});

  nameInput.value = '';
  positionInput.value = '';
  phoneInput.value = '';
}

function clearAllContacts(): void {
  document.querySelectorAll(COLUMN_ELEMENT_SELECTOR).forEach((letterElement) => {
    const contactsContainer = letterElement.querySelector(CONTACTS_SELECTOR) as HTMLElement;

    contactsContainer.innerHTML = '';

    const counterElement = letterElement.querySelector(COUNTER_SELECTOR) as HTMLElement;
    const counter = new Counter(counterElement, contactsContainer);
    counter.reset();
  });

  // Очищаем контакты в Redux store
  store.dispatch(clearAllContactsAction());
}

const form = document.querySelector(FORM_SELECTOR) as HTMLElement;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addContactToList();
});

const formBtsContainer = document.querySelector(FORM_BTNS) as HTMLElement;
formBtsContainer.addEventListener('click', (e: Event) => {
  const target = e.target as Element;
  if (target.matches(CONTACT_CLEAR_BTN)) {
    clearAllContacts();
  }

  if (target.matches(CONTACT_SEARCH_BTN)) {
    openSearchModal();
  }

});

export { nameInput, positionInput, phoneInput };
