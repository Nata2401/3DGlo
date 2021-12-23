"use strict";
const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleMenu();
  });

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      const blockID = menuItem.getAttribute("href");

      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      handleMenu();
    })
  );
};

export default menu;
