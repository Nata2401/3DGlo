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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"25 december 2021\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use stcrict\";\r\nconst modal = () => {\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modal = document.querySelector(\".popup\");\r\n  const modalContent = modal.querySelector(\".popup-content\");\r\n  const modalClose = modal.querySelector(\".popup-close\");\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      const topOpen = () => {\r\n        modal.style.display = \"block\";\r\n        modal.style.top = 0;\r\n\r\n        let idInterval;\r\n        let count = 0;\r\n\r\n        const appear = () => {\r\n          count++;\r\n          idInterval = requestAnimationFrame(appear);\r\n          if (count <= 15) {\r\n            modalContent.style.top = count * 10 + \"px\";\r\n          } else {\r\n            cancelAnimationFrame(idInterval);\r\n          }\r\n        };\r\n        idInterval = requestAnimationFrame(appear);\r\n      };\r\n\r\n      if (window.innerWidth > 768) {\r\n        topOpen();\r\n      } else {\r\n        modal.style.display = \"block\";\r\n      }\r\n    });\r\n\r\n    modalClose.addEventListener(\"click\", () => {\r\n      const topClose = () => {\r\n        let idInterval;\r\n        let count = 15;\r\n\r\n        const close = () => {\r\n          if (count >= 0) {\r\n            count--;\r\n            modalContent.style.top = count * 10 + \"px\";\r\n            idInterval = requestAnimationFrame(close);\r\n          } else {\r\n            cancelAnimationFrame(idInterval);\r\n            modal.style.display = \"none\";\r\n          }\r\n        };\r\n        idInterval = requestAnimationFrame(close);\r\n      };\r\n\r\n      if (window.innerWidth > 768) {\r\n        topClose();\r\n      } else {\r\n        modal.style.display = \"none\";\r\n      }\r\n    });\r\n  });\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollSmooth = () => {\r\n  const toServiceBtn = document.querySelector(\"a\");\r\n\r\n  toServiceBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    const blockID = toServiceBtn.getAttribute(\"href\");\r\n    document.querySelector(\"\" + blockID).scrollIntoView({\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollSmooth);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const nameUserOne = document.querySelector(\"#form1-name\");\r\n  const nameUserTwo = document.querySelector(\"#form2-name\");\r\n  const nameUserThree = document.querySelector(\"#form3-name\");\r\n  const message = document.querySelector(\".mess\");\r\n  const emailsInputs = document.querySelectorAll(\"input[type=email]\");\r\n  const phoneInputs = document.querySelectorAll(\"input[type=tel]\");\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (e.target.type === \"text\") {\r\n      e.target.value = e.target.value.replace(/[^\\d]/g, \"\");\r\n    }\r\n  });\r\n  emailsInputs.forEach((email) => {\r\n    email.addEventListener(\"input\", () => {\r\n      email.value = email.value.replace(/[^a-zA-Z\\@\\-\\_\\.\\!\\~\\*\\'/]/g, \"\");\r\n    });\r\n  });\r\n\r\n  phoneInputs.forEach((phone) => {\r\n    phone.addEventListener(\"input\", () => {\r\n      phone.value = phone.value.replace(/[^0-9\\(\\)\\-]/g, \"\");\r\n    });\r\n  });\r\n  nameUserOne.addEventListener(\"input\", () => {\r\n    let namePlaceholderOne = nameUserOne.getAttribute(\"placeholder\");\r\n    if (namePlaceholderOne === \"Ваше имя\") {\r\n      nameUserOne.value = nameUserOne.value.replace(/[^а-яА-Я\\s\\-]/g, \"\");\r\n    }\r\n  });\r\n  nameUserTwo.addEventListener(\"input\", () => {\r\n    let namePlaceholderOne = nameUserOne.getAttribute(\"placeholder\");\r\n    if (namePlaceholderOne === \"Ваше имя\") {\r\n      nameUserTwo.value = nameUserTwo.value.replace(/[^а-яА-Я\\s\\-]/g, \"\");\r\n    }\r\n  });\r\n  nameUserThree.addEventListener(\"input\", () => {\r\n    let namePlaceholderOne = nameUserOne.getAttribute(\"placeholder\");\r\n    if (namePlaceholderOne === \"Ваше имя\") {\r\n      nameUserThree.value = nameUserThree.value.replace(/[^а-яА-Я\\s\\-]/g, \"\");\r\n    }\r\n  });\r\n  message.addEventListener(\"input\", () => {\r\n    let namePlaceholderOne = message.getAttribute(\"placeholder\");\r\n    if (namePlaceholderOne === \"Ваше сообщение\") {\r\n      message.value = message.value.replace(/[^а-яА-Я\\s\\-]/g, \"\");\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\r\n\n\n//# sourceURL=webpack:///./modules/validate.js?");

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