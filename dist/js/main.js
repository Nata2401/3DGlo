/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"25 december 2021\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: \"form1\",\r\n  someElem: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ formId: \"form2\" });\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ formId: \"form3\" });\r\n\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\r\n  \".portfolio-content\",\r\n  \".portfolio-item\",\r\n  \".portfolio-dots\",\r\n  \"portfolio-item-active\",\r\n  \"dot-active\"\r\n);\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n    total.textContent = totalValue;\r\n\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 350,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        total.textContent = Math.round(totalValue * progress);\r\n      },\r\n    });\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) {\r\n      timeFraction = 1;\r\n    }\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n\r\n  const toggleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  const goToAncor = (e) => {\r\n    document.querySelector(e.hash).scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  };\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".close-btn\") || e.target.closest(\".menu\")) {\r\n      e.preventDefault();\r\n      toggleMenu();\r\n    } else if (e.target.closest(\".active-menu>ul>li>a\")) {\r\n      e.preventDefault();\r\n      goToAncor(e.target.closest(\".active-menu>ul>li>a\"));\r\n      toggleMenu();\r\n    } else if (e.target !== menu && menu.classList.contains(\"active-menu\")) {\r\n      toggleMenu();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modal = document.querySelector(\".popup\");\r\n  const modalContent = modal.querySelector(\".popup-content\");\r\n\r\n  const showModal = () => {\r\n    modal.style.display = \"block\";\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 400,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        modalContent.style.transform = `scale(${progress})`;\r\n        modal.style.opacity = progress;\r\n      },\r\n    });\r\n  };\r\n\r\n  const closeModal = () => {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 400,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        modalContent.style.transform = `scale(${1 - progress})`;\r\n        modal.style.opacity = 1 - progress;\r\n      },\r\n    });\r\n    setTimeout(() => (modal.style.display = \"none\"), 400);\r\n  };\r\n\r\n  buttons.forEach((button) => button.addEventListener(\"click\", showModal));\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      closeModal();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollSmooth = () => {\r\n  const toServiceBtn = document.querySelector(\"a\");\r\n\r\n  toServiceBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    const blockID = toServiceBtn.getAttribute(\"href\");\r\n    document.querySelector(\"\" + blockID).scrollIntoView({\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollSmooth);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n  const form = document.getElementById(formId);\r\n  let statusBlock = document.createElement(\"div\");\r\n  statusBlock.className = \"status-block\";\r\n  const errorText = \"Ошибка...\";\r\n  const succsessText = \"Спасибо! Наш менеджер с вами свяжется!\";\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n\r\n    list.forEach((input) => {\r\n      if (input.classList.contains(\"validation-error\")) {\r\n        success = false;\r\n      }\r\n    });\r\n\r\n    return success;\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n    const formElements = form.querySelectorAll(\"input\");\r\n\r\n    statusBlock.textContent = \"\";\r\n\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n    someElem.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n      const elementContent =\r\n        elem.type === \"input\" ? element.value : element.textContent;\r\n\r\n      formBody[elem.id] = elementContent;\r\n    });\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then(() => {\r\n          statusBlock.textContent = succsessText;\r\n\r\n          formElements.forEach((input) => {\r\n            input.value = \"\";\r\n            input.style.border = \"\";\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n          console.error(error);\r\n        });\r\n    } else {\r\n      statusBlock.textContent = errorText;\r\n      alert(\"Данные заполнены неверно!!!\");\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error(\"Формы с данным id нет на странице!\");\r\n    }\r\n\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.error(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (\r\n  sliderClass,\r\n  slideClass,\r\n  dotClass,\r\n  slideActiveClass = \"slide-active\",\r\n  dotActiveClass = \"dot-active\"\r\n) => {\r\n  const sliderBlock = document.querySelector(sliderClass);\r\n  const slides = document.querySelectorAll(slideClass);\r\n  const dotsList = document.querySelector(dotClass);\r\n  let dots = [];\r\n\r\n  if (sliderBlock && slides && dotsList) {\r\n    let currentSlide = 0;\r\n    let interval;\r\n    let timeInterval = 2000;\r\n\r\n    for (let i = 0; i < slides.length; i++) {\r\n      let dot = document.createElement(\"li\");\r\n      dot.classList.add(\"dot\");\r\n      if (i === 0) {\r\n        dot.classList.add(dotActiveClass);\r\n      }\r\n      dots.push(dot);\r\n      dotsList.appendChild(dot);\r\n    }\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n      elems[index].classList.remove(strClass);\r\n    };\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n      elems[index].classList.add(strClass);\r\n    };\r\n\r\n    const autoSlide = () => {\r\n      prevSlide(slides, currentSlide, slideActiveClass);\r\n      prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n      currentSlide++;\r\n\r\n      if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n      nextSlide(slides, currentSlide, slideActiveClass);\r\n      nextSlide(dots, currentSlide, dotActiveClass);\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n      interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n      clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n\r\n      if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n        return;\r\n      }\r\n\r\n      prevSlide(slides, currentSlide, slideActiveClass);\r\n      prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n      if (e.target.matches(\"#arrow-right\")) {\r\n        currentSlide++;\r\n      } else if (e.target.matches(\"#arrow-left\")) {\r\n        currentSlide--;\r\n      } else if (e.target.classList.contains(\"dot\")) {\r\n        dots.forEach((dot, index) => {\r\n          if (e.target === dot) {\r\n            currentSlide = index;\r\n          }\r\n        });\r\n      }\r\n\r\n      if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n\r\n      if (currentSlide < 0) {\r\n        currentSlide = slides.length - 1;\r\n      }\r\n\r\n      nextSlide(slides, currentSlide, slideActiveClass);\r\n      nextSlide(dots, currentSlide, dotActiveClass);\r\n    });\r\n\r\n    sliderBlock.addEventListener(\r\n      \"mouseenter\",\r\n      (e) => {\r\n        if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n          stopSlide();\r\n        }\r\n      },\r\n      true\r\n    );\r\n\r\n    sliderBlock.addEventListener(\r\n      \"mouseleave\",\r\n      (e) => {\r\n        if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n          startSlide(timeInterval);\r\n        }\r\n      },\r\n      true\r\n    );\r\n\r\n    startSlide(timeInterval);\r\n  } else {\r\n    return;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemain = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemain = (dateStop - dateNow) / 1000;\r\n\r\n    let hours = Math.floor(timeRemain / 60 / 60);\r\n    let minutes = Math.floor((timeRemain / 60) % 60);\r\n    let seconds = Math.floor(timeRemain % 60);\r\n\r\n    return { timeRemain, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemain();\r\n\r\n    if (getTime.hours < 10) {\r\n      getTime.hours = \"0\" + getTime.hours;\r\n    }\r\n    if (getTime.minutes < 10) {\r\n      getTime.minutes = \"0\" + getTime.minutes;\r\n    }\r\n    if (getTime.seconds < 10) {\r\n      getTime.seconds = \"0\" + getTime.seconds;\r\n    }\r\n\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n\r\n    // if (getTime.timeRemain > 0){\r\n    //     setTimeout(updateClock, 1000);\r\n    // }\r\n  };\r\n\r\n  const startTimer = () => {\r\n    let getTime = getTimeRemain();\r\n    if (getTime.timeRemain > 0) {\r\n      setInterval(updateClock, 1000);\r\n    }\r\n  };\r\n  startTimer();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validate.js":
/*!*****************************!*\
  !*** ./modules/validate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const nameUserOne = document.querySelector(\"#form1-name\");\r\n  const nameUserTwo = document.querySelector(\"#form2-name\");\r\n  const nameUserThree = document.querySelector(\"#form3-name\");\r\n  const message = document.querySelector(\".mess\");\r\n  const emailsInputs = document.querySelectorAll(\"input[type=email]\");\r\n  const phoneInputs = document.querySelectorAll(\"input[type=tel]\");\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (e.target.type === \"text\") {\r\n      e.target.value = e.target.value.replace(/[^\\d]/g, \"\");\r\n    }\r\n  });\r\n  emailsInputs.forEach((email) => {\r\n    email.addEventListener(\"input\", () => {\r\n      email.value = email.value.replace(/[^a-zA-Z\\@\\-\\_\\.\\!\\~\\*\\'/]/g, \"\");\r\n    });\r\n  });\r\n\r\n  phoneInputs.forEach((phone) => {\r\n    phone.addEventListener(\"input\", () => {\r\n      phone.value = phone.value.replace(/[^0-9\\(\\)\\+\\-]/g, \"\");\r\n    });\r\n  });\r\n  nameUserOne.addEventListener(\"input\", () => {\r\n    let namePlaceholderOne = nameUserOne.getAttribute(\"placeholder\");\r\n    if (namePlaceholderOne === \"Ваше имя\") {\r\n      nameUserOne.value = nameUserOne.value.replace(/[^а-яА-Я\\s]/g, \"\");\r\n    }\r\n  });\r\n  nameUserTwo.addEventListener(\"input\", () => {\r\n    let namePlaceholderOne = nameUserOne.getAttribute(\"placeholder\");\r\n    if (namePlaceholderOne === \"Ваше имя\") {\r\n      nameUserTwo.value = nameUserTwo.value.replace(/[^а-яА-Я\\s]/g, \"\");\r\n    }\r\n  });\r\n  nameUserThree.addEventListener(\"input\", () => {\r\n    let namePlaceholderOne = nameUserOne.getAttribute(\"placeholder\");\r\n    if (namePlaceholderOne === \"Ваше имя\") {\r\n      nameUserThree.value = nameUserThree.value.replace(/[^а-яА-Я\\s]/g, \"\");\r\n    }\r\n  });\r\n  message.addEventListener(\"input\", () => {\r\n    let namePlaceholderOne = message.getAttribute(\"placeholder\");\r\n    if (namePlaceholderOne === \"Ваше сообщение\") {\r\n      message.value = message.value.replace(\r\n        /[^\\\\а-я\\s\\d\\.\\,\\!\\?\\:\\-\\+\\*\\=\\;\\'\\\"\\@\\(\\)]/gi,\r\n        \"\"\r\n      );\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\r\n\n\n//# sourceURL=webpack:///./modules/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;