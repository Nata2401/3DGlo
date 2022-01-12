const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  let statusBlock = document.createElement("div");
  statusBlock.className = "status-block";
  let errorText = "Ошибка...";
  const succsessText = "Спасибо! Наш менеджер с вами свяжется!";
 
  const validate = (formInputs) => {
    const greenBorder = (elem) => {
      elem.style.border = '2px solid green';
      setTimeout(() => elem.style.border = '', 3000);
    };

    let success = true;
    errorText = 'Ошибка...';

    formInputs.forEach(input => {
      const type = input.name;
      const value = input.value;
      let isEmpty = value === '';

      switch (type) {
        case 'user_email':
          if (isEmpty) {
            success = false;
            greenBorder(input);
            errorText += 'Не заполнен Email!';
          }
          break;
        case 'user_message':
          if (isEmpty) {
            success = false;
            greenBorder(input);
            errorText += 'Не заполнено поле сообщения!';
          }
          break;
        case 'user_name':
          if (value.length < 2) {
            success = false;
            greenBorder(input);
            errorText += 'В имени должно быть от 2 символов!';
          }
          break;
        case 'user_phone':
          if (value.length < 11) {
            success = false;
            greenBorder(input);
            errorText += 'Слишком короткий номер!';
          } 
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};
    const formElements = form.querySelectorAll("input");

    statusBlock.textContent = "";

    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      const elementContent =
        elem.type === "input" ? element.value : element.textContent;

      formBody[elem.id] = elementContent;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(() => {
          statusBlock.textContent = succsessText;
          statusBlock.style.color = 'white';

          formElements.forEach((input) => {
            input.value = "";
            input.style.border = "";
            setTimeout(()=>{
              statusBlock.textContent = '';  
              if (form.id === 'form3') {
              const popup = document.querySelector('.popup');
              popup.style.display = 'none';
              }      
          },5000);
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          console.error(error);
        });
    } else {
      statusBlock.textContent = errorText;
      statusBlock.style.color = 'white';
      alert("Имя должно быть не короче 2 симвовлов, E-mail в формате xxxx@yyyy.zzz, номер телефона не короче 11 цифр!");
    }
  };

  try {
    if (!form) {
      throw new Error("Формы с данным id нет на странице!");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default sendForm;
