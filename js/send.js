const form = document.forms.ajaxform;
const sendButton = document.querySelector('.button');
const successSent = document.querySelector('.send-feedback');
const noSuccessSent = document.querySelector('.no-send-feedback');

sendButton.addEventListener('click', function (event) {
  event.preventDefault();
  form.elements.email.nextElementSibling.textContent = '';
  form.elements.name.nextElementSibling.textContent = '';
  successSent.textContent = '';
  noSuccessSent.textContent = '';
  if (validateForm(form)) {
    var data = {
    email: form.elements.email.value,
    name: form.elements.name.value,
    message: form.elements.message.value
  };
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'msg.php');
  xhr.send(JSON.stringify(data));
  xhr.onload = function() {
    if(xhr.response){
      noSuccessSent.textContent = '';
      successSent.textContent = 'Ваше сообщение успешно отправлено.';
    } else {
      successSent.textContent = '';
      noSuccessSent.textContent = 'Сообщение не отправлено. Попробуйте позже.';
    }
  };
    form.elements.email.value = '';
    form.elements.name.value = '';
    form.elements.message.value = '';
  };
});

function validateForm(formData) {
  let valid = true;
  const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(formData.elements.email.value)) {
    valid = false;
    formData.elements.email.nextElementSibling.textContent = 'Ошибка в адресе email';
  }
  if (!formData.elements.email.value) {
    valid = false;
    formData.elements.email.nextElementSibling.textContent = 'Поле email не должно быть пустым';
  }
  if (!formData.elements.name.value) {
    valid = false;
    formData.elements.name.nextElementSibling.textContent = 'Поле имя не должно быть пустым';
  }
  return valid;
}