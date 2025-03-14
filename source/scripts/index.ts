import './modules/form-buttons';
import { createColumn } from './modules/column';
import { ALPHABET_A_M, ALPHABET_N_Z } from './modules/alphabet';
import { phoneInput } from './modules/form-buttons';
import { initPhoneInput } from './modules/phone-mask';
import {
  CONTACT_DELETE_BTN,
  CONTACT_EDIT_BTN,
  FORM_BTN_SAVE,
  MESSAGE_NAME_SELECTOR,
  MESSAGE_PHONE_SELECTOR,
  MESSAGE_POSITION_SELECTOR,
  MESSAGE_SELECTOR,
  MODAL_CLOSE_BTN,
  MODAL_OVERLAY,
  MODAL_SHOW_BTN } from './modules/constants';
import {
  deleteContact as deleteContactAction
} from './store/slices/contact-slice.ts';
import { showAllContacts } from './modules/search';
import { openEditPopup, saveEditPopup } from './modules/edit-form';
import { closeModal, modal } from './modules/modal';
import { ContactInfo } from './types/contact';
import {store} from './store/store.ts';
import {renderColumn} from './modules/contact.ts';

document.addEventListener('DOMContentLoaded', () => {
  const containerLeft = document.querySelector('.column-left') as HTMLElement;
  const containerRight = document.querySelector('.column-right') as HTMLElement;

  createColumn(ALPHABET_A_M, containerLeft);
  createColumn(ALPHABET_N_Z, containerRight);

  // Используем Redux store для получения контактов
  const contacts = store.getState().contacts.contacts;

  // Группируем контакты по первой букве имени
  const contactsByLetter: Record<string, ContactInfo[]> = {};
  contacts.forEach((contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!contactsByLetter[firstLetter]) {
      contactsByLetter[firstLetter] = [];
    }
    contactsByLetter[firstLetter].push(contact);
  });

  // Рендерим контакты для каждой буквы
  Object.keys(contactsByLetter).forEach((letter) => {
    renderColumn(letter, contactsByLetter[letter]);
  });

  initPhoneInput(phoneInput);

  // Обработка кликов внутри модального окна
  modal.addEventListener('click', (e: Event) => {
    const target = e.target as Element;

    if (target.matches(MODAL_SHOW_BTN)) {
      showAllContacts();
    }

    if (target.matches(FORM_BTN_SAVE)) {
      saveEditPopup();
    }

    if (target.closest(CONTACT_DELETE_BTN)) {
      const contactElement = target.closest(MESSAGE_SELECTOR) as HTMLElement;
      const name = contactElement.querySelector(MESSAGE_NAME_SELECTOR)?.textContent ?? '';

      // Удаляем контакт через Redux action creator
      store.dispatch(deleteContactAction(name));
      return;
    }

    if (target.closest(CONTACT_EDIT_BTN)) {
      const contactElement = target.closest(MESSAGE_SELECTOR) as HTMLElement;

      // Получаем данные из contactElement
      const name = contactElement.querySelector(MESSAGE_NAME_SELECTOR)?.textContent ?? '';
      const position = contactElement.querySelector(MESSAGE_POSITION_SELECTOR)?.textContent ?? '';
      const phone = contactElement.querySelector(MESSAGE_PHONE_SELECTOR)?.textContent ?? '';

      // Передаем объект ContactInfo в openEditPopup
      const contactInfo: ContactInfo = { name, position, phone };
      openEditPopup(contactInfo);
    }

    if (target.closest(MODAL_CLOSE_BTN) || target.matches(MODAL_OVERLAY)) {
      closeModal();
    }
  });
});
