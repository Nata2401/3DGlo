const validate = () => {
  const calcBlock = document.querySelector(".calc-block");
  const nameUserOne = document.querySelector("#form1-name");
  const nameUserTwo = document.querySelector("#form2-name");
  const nameUserThree = document.querySelector("#form3-name");
  const message = document.querySelector(".mess");
  const emailsInputs = document.querySelectorAll("input[type=email]");
  const phoneInputs = document.querySelectorAll("input[type=tel]");

  calcBlock.addEventListener("input", (e) => {
    if (e.target.type === "text") {
      e.target.value = e.target.value.replace(/[^\d]/g, "");
    }
  });
  emailsInputs.forEach((email) => {
    email.addEventListener("input", () => {
      email.value = email.value.replace(/[^a-zA-Z\@\-\_\.\!\~\*\'/]/g, "");
    });
  });

  phoneInputs.forEach((phone) => {
    phone.addEventListener("input", () => {
      phone.value = phone.value.replace(/[^0-9\(\)\+\-]/g, "");
    });
  });
  nameUserOne.addEventListener("input", () => {
    let namePlaceholderOne = nameUserOne.getAttribute("placeholder");
    if (namePlaceholderOne === "Ваше имя") {
      nameUserOne.value = nameUserOne.value.replace(/[^а-яА-Я\s]/g, "");
    }
  });
  nameUserTwo.addEventListener("input", () => {
    let namePlaceholderOne = nameUserOne.getAttribute("placeholder");
    if (namePlaceholderOne === "Ваше имя") {
      nameUserTwo.value = nameUserTwo.value.replace(/[^а-яА-Я\s]/g, "");
    }
  });
  nameUserThree.addEventListener("input", () => {
    let namePlaceholderOne = nameUserOne.getAttribute("placeholder");
    if (namePlaceholderOne === "Ваше имя") {
      nameUserThree.value = nameUserThree.value.replace(/[^а-яА-Я\s]/g, "");
    }
  });
  message.addEventListener("input", () => {
    let namePlaceholderOne = message.getAttribute("placeholder");
    if (namePlaceholderOne === "Ваше сообщение") {
      message.value = message.value.replace(
        /[^\\а-я\s\d\.\,\!\?\:\-\+\*\=\;\'\"\(\)]/gi,
        ""
      );
    }
  });
};

export default validate;
