"use strict";

//мобильное меню
var navMain = document.querySelector(".nav-main");
var navToggle = document.querySelector(".nav-main__toggle");

navMain.classList.remove("nav-main--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("nav-main--closed")) {
    navMain.classList.remove("nav-main--closed");
    navMain.classList.add("nav-main--opened");
  } else {
    navMain.classList.add("nav-main--closed");
    navMain.classList.remove("nav-main--opened");
  }
});

//форма

var form = document.querySelector(".form__feedback");
var button = document.querySelector(".button--form");
var popupSend = document.querySelector(".modal__popup--send");
var closeSend = popupSend.querySelector(".button--modal-send");
var popupError = document.querySelector(".modal__popup--error");
var textareaField = document.querySelector(".form-textarea__field")
var closeError = popupError.querySelector(".button--modal-error");

var feedbackName = document.querySelector("[name=name]");
var feedbackSurname = document.querySelector("[name=surname]");
var feedbackTel = document.querySelector("[name=tel]");
var feedbackEmail = document.querySelector("[name=email]");
var feedbackField = document.querySelector("[name=comment]");

var storageName = localStorage.getItem("name");
var storageSurname = localStorage.getItem("surname");
var storageTel = localStorage.getItem("tel");
var storageEmail = localStorage.getItem("email");

if (storageName) {
  feedbackName.value = storageName;
  if (storageSurname) {
    feedbackSurname.value = storageSurname;
    if (storageTel) {
      feedbackTel.value = storageTel;
      if (storageEmail) {
        feedbackEmail.value = storageEmail;
        feedbackField.focus();
      } else
        feedbackEmail.focus();
    } else
      feedbackTel.focus();
  } else
    feedbackSurname.focus();
} else {
  feedbackName.focus();
};

var checkValue = function(textarea) {
  if (textarea.value === "") {
    return false;
  } else {
    return true;
  }
};


form.addEventListener("submit", function(evt) {
  if (!feedbackName || !feedbackSurname || !feedbackTel || !feedbackEmail || !checkValue(feedbackField)) {
    evt.preventDefault();
    popupError.classList.add("modal--show");
    textareaField.classList.add("form-textarea__field--error");
  } else {
    localStorage.setItem("name", feedbackName.value);
    localStorage.setItem("surname", feedbackSurname.value);
    localStorage.setItem("tel", feedbackTel.value);
    localStorage.setItem("email", feedbackEmail.value);
    popupSend.classList.add("modal--show");
    evt.preventDefault();
    popupSend.classList.add("modal--show");
  }
});

closeError.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.remove("modal--show");
  textareaField.classList.remove("form-textarea__field--error");
});

closeSend.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSend.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupError) {
      if (popupError.classList.contains("modal--show")) {
        popupError.classList.remove("modal--show");
      }
    }
    if (popupSend) {
      if (popupSend.classList.contains("modal--show")) {
        popupSend.classList.remove("modal-show");
      }
    }
  }
});
