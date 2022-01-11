const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  let statusBlock = document.createElement("div");
  statusBlock.className = "status-block";
  const errorText = "Ошибка...";
  const succsessText = "Спасибо! Наш менеджер с вами свяжется!";

  const validate = (list) => {
    let success = true;

    let formElements = form.querySelectorAll("input");

    list.forEach((inputs) => {
      formElements = form.querySelectorAll("input");
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gi;

      if (inputs.classList.contains("success")) {
        success = false;
      } 

      if (formElements[0].value.length < 2) {
        success = false;
      } else if (reg.test(formElements[1].value) == false) {
        success = false;
      } else if (formElements[2].value.length < 11) {
        success = false;
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
