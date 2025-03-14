import { Counter } from './counter';
import { COLUMN_ELEMENT_SELECTOR,
  CONTACT_DELETE_BTN,
  CONTACT_EDIT_BTN,
  CONTACT_TABLE,
  CONTACTS_OPEN_SELECTOR,
  CONTACTS_SELECTOR,
  COUNTER_SELECTOR,
  ELEMENT_SELECTOR,
  MESSAGE_NAME_SELECTOR,
  MESSAGE_PHONE_SELECTOR,
  MESSAGE_POSITION_SELECTOR,
  MESSAGE_SELECTOR,
  MESSAGE_TEMPLATE_SELECTOR } from './constants';
import { openEditPopup } from './edit-form';
import { ContactInfo } from '../types/contact';
import {AddContactParams} from '../types/add-contact';
import {store} from '../store/store.ts';
import {
  addContact as addContactAction,
  deleteContact as deleteContactAction,
  editContact
} from '../store/slices/contact-slice.ts';
import {selectContacts} from '../store/selectors.ts';

const counters: { [key: string]: Counter} = {}; // Хранилище для счетчиков

function renderContactElement({ name, position, phone }: ContactInfo) {
  const letterTemplate = document.querySelector(MESSAGE_TEMPLATE_SELECTOR) as HTMLTemplateElement;
  const content = letterTemplate.content.querySelector(MESSAGE_SELECTOR);

  const contactElement = content?.cloneNode(true) as HTMLElement;

  if (!contactElement) {
    return;
  }
  const nameElement = contactElement.querySelector(MESSAGE_NAME_SELECTOR) as HTMLElement;
  const positionElement = contactElement.querySelector(MESSAGE_POSITION_SELECTOR) as HTMLElement;
  const phoneElement = contactElement.querySelector(MESSAGE_PHONE_SELECTOR) as HTMLElement;

  if (!nameElement || !positionElement || !phoneElement) {
    return null;
  }

  // Обновляем все поля для нового контакта
  nameElement.textContent = name;
  positionElement.textContent = position;
  phoneElement.textContent = phone;
  return contactElement;
}

function renderContacts(contacts: ContactInfo[], container: HTMLElement) {
  container.innerHTML = '';
  contacts.forEach(({ name, position, phone }) => {
    const contactElement = renderContactElement({ name, position, phone });
    if (!contactElement) {
      return;
    }
    container.append(contactElement);
  });
}

function renderColumn(letter: string, contacts: ContactInfo[]): void {
  const columnElement = document.querySelector(`[data-id="${letter.toLowerCase()}"]`)?.closest(COLUMN_ELEMENT_SELECTOR);

  if (columnElement) {
    const contactsContainer = columnElement.querySelector(CONTACTS_SELECTOR) as HTMLElement;
    renderContacts(contacts, contactsContainer);

    const counterElement = columnElement.querySelector(COUNTER_SELECTOR) as HTMLElement;

    // Если счетчик для этой буквы еще не создан, создаем его
    if (!counters[letter]) {
      counters[letter] = new Counter(counterElement, contactsContainer);
    }

    // Обновляем счетчик на основе текущего количества контактов
    counters[letter].count = contacts.length;
    counters[letter].update();
  }
}

function addContact({ contact }: AddContactParams): void {
  store.dispatch(addContactAction(contact));

  const letter = contact.name[0].toUpperCase();
  const state = store.getState();
  const allContacts = selectContacts(state);
  const updatedContacts = allContacts.filter(
    (item) => item.name[0].toUpperCase() === letter
  );
  renderColumn(letter, updatedContacts);
}

function deleteContact(event: Event): void {
  const target = event.target as Element;
  const contactMessage = target.closest(MESSAGE_SELECTOR);

  if (!contactMessage) {
    return;
  }

  const name = contactMessage.querySelector(MESSAGE_NAME_SELECTOR)?.textContent ?? '';

  store.dispatch(deleteContactAction(name));
  contactMessage.remove();

  const firstLetter = name[0].toUpperCase();
  const state = store.getState();
  const allContacts = selectContacts(state);
  const updatedContacts = allContacts.filter(
    (contact) => contact.name[0].toUpperCase() === firstLetter
  );
  renderColumn(firstLetter, updatedContacts);
}

function updateContact(oldContact: ContactInfo, newContact: ContactInfo): void {
  store.dispatch(
    editContact({
      oldName: oldContact.name,
      newContact,
    })
  );

  const firstLetter = newContact.name[0].toUpperCase();
  const state = store.getState();
  const allContacts = selectContacts(state);
  const updatedContacts = allContacts.filter(
    (contact) => contact.name[0].toUpperCase() === firstLetter
  );
  renderColumn(firstLetter, updatedContacts);
}


function openContactInfo(event: Event): void {
  const target = event.target as Element;
  if (target.closest(COLUMN_ELEMENT_SELECTOR)) {
    const currentBtn = target.closest(ELEMENT_SELECTOR);

    if (!currentBtn) {
      return;
    }

    const currentContent = currentBtn.querySelector(CONTACTS_SELECTOR) as HTMLElement | null;

    if (!currentContent) {
      return;
    }

    currentContent.classList.toggle(CONTACTS_OPEN_SELECTOR);

    if (currentContent.classList.contains(CONTACTS_OPEN_SELECTOR)) {
      currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    } else {
      currentContent.style.maxHeight = '0';
    }
  }
}

document.querySelector(CONTACT_TABLE)?.addEventListener('click', (e: Event) => {
  const target = e.target as Element;

  if (target.closest(CONTACT_DELETE_BTN)) {
    deleteContact(e);
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

  openContactInfo(e);
});

document.querySelector(CONTACT_TABLE)?.addEventListener('keydown', (event: Event) => {
  const keyboardEvent = event as KeyboardEvent;

  if (keyboardEvent.key === ' ' || keyboardEvent.key === 'Enter') {
    event.preventDefault();

    const target = event.target as Element;

    if (target.matches(CONTACT_DELETE_BTN)) {
      deleteContact(event);
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

    openContactInfo(event);
  }
});

// // Подписываемся на изменения состояния Redux
// store.subscribe(() => {
//   const state = store.getState();
//   const contactsByLetter: Record<string, ContactInfo[]> = {};
//
//   const allContacts = selectContacts(state);
//   allContacts.forEach((contact) => {
//     const firstLetter = contact.name[0].toUpperCase();
//     if (!contactsByLetter[firstLetter]) {
//       contactsByLetter[firstLetter] = [];
//     }
//     contactsByLetter[firstLetter].push(contact);
//   });
//
//   Object.keys(contactsByLetter).forEach((letter) => {
//     renderColumn(letter, contactsByLetter[letter]);
//   });
// });

// Функция для рендера всех контактов
function renderAllContacts() {
  const state = store.getState();
  const contacts = selectContacts(state);

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
}

// Подписываемся на изменения store
store.subscribe(() => {
  renderAllContacts();
});

// Инициализация контактов при старте приложения
renderAllContacts();

export { renderContactElement, addContact, deleteContact, renderContacts, updateContact, renderColumn };
