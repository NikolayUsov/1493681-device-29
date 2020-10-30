const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-btn");
const modalNameInput = document.querySelector(".modal-name-input");
const modalEmailInput = document.querySelector(".modal-email");
const loginForm = document.querySelector(".login-form");
const textAreaInput = document.querySelector(".modal-text-area");

let isStorageSupport = true;
let storage = "";
let storageEmail = "";

try {
  storage = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (storage) {
    modalNameInput.value = storage;
    if (storageEmail) {
      modalEmailInput.value = storageEmail;
      textAreaInput.focus();
    } else {
      modalEmailInput.focus();
    }
  } else {
    modalNameInput.focus();
  }
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!modalNameInput.value || !modalEmailInput.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("login", modalNameInput.value);
    localStorage.setItem("email", modalEmailInput.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});

