import { ContactInfo } from '../types/contact';
import { MODAL_INPUT, MODAL_SEARCH_AREA, MODAL_SHOW_BTN, MODAL_TEMPLATE_SELECTOR } from './constants';
import { renderContactElement } from './contact';
import { modal, openModal} from './modal';
import {store} from '../store/store.ts';
import {selectContacts} from '../store/selectors.ts';

const searchModalTemplate = document.querySelector(MODAL_TEMPLATE_SELECTOR) as HTMLTemplateElement;

function searchContacts(query: string): ContactInfo[] {
  const state = store.getState();
  const contacts: ContactInfo[] = selectContacts(state);

  return contacts.filter(
    ({ name, position, phone }) =>
      name.toLowerCase().includes(query) ||
      position.toLowerCase().includes(query) ||
      phone.includes(query)
  );
}

function displaySearchResults(results: ContactInfo[], area: HTMLElement) {
  area.innerHTML = '';

  if (results.length === 0) {
    area.textContent = 'No results found';
    return;
  }

  results.forEach(({ name, position, phone }) => {
    const contactElement = renderContactElement({ name, position, phone });
    if (!contactElement) {
      return;
    }
    area.appendChild(contactElement);
  });
}

function listenSearchInput(element: HTMLInputElement, area: HTMLElement) {
  element.addEventListener('input', () => {
    const query = element.value.trim().toLowerCase();
    if (query) {
      const results = searchContacts(query);
      displaySearchResults(results, area);
    } else {
      area.innerHTML = '';
    }
  });
}

function openSearchModal() {
  openModal(searchModalTemplate);

  const searchInput = modal.querySelector(MODAL_INPUT) as HTMLInputElement;
  const searchArea = modal.querySelector(MODAL_SEARCH_AREA) as HTMLElement;

  listenSearchInput(searchInput, searchArea);

  const showButton = modal.querySelector(MODAL_SHOW_BTN) as HTMLButtonElement;
  showButton.addEventListener('click', showAllContacts);
}

function showAllContacts() {
  const state = store.getState();
  const storage: ContactInfo[] = selectContacts(state);
  const searchArea = modal.querySelector(MODAL_SEARCH_AREA) as HTMLElement;
  displaySearchResults(storage, searchArea);

  const input = modal.querySelector('input') as HTMLInputElement;
  input.focus();
}

const currentQuery = ''; // Текущий запрос для поиска

function updateSearchResults() {
  const state = store.getState();
  const contacts: ContactInfo[] = selectContacts(state);
  const searchArea = modal.querySelector(MODAL_SEARCH_AREA) as HTMLElement;

  if (!searchArea) {
    return;
  }

  if (currentQuery) {
    const results = searchContacts(currentQuery);
    displaySearchResults(results, searchArea);
  } else {
    displaySearchResults(contacts, searchArea);
  }
}

// Подписываемся на изменения store
store.subscribe(updateSearchResults);

export { openSearchModal, showAllContacts };
