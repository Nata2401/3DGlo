"use stcrict";
const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const modalContent = modal.querySelector(".popup-content");
  const modalClose = modal.querySelector(".popup-close");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const topOpen = () => {
        modal.style.display = "block";
        modal.style.top = 0;

        let idInterval;
        let count = 0;

        const appear = () => {
          count++;
          idInterval = requestAnimationFrame(appear);
          if (count <= 15) {
            modalContent.style.top = count * 10 + "px";
          } else {
            cancelAnimationFrame(idInterval);
          }
        };
        idInterval = requestAnimationFrame(appear);
      };

      if (window.innerWidth > 768) {
        topOpen();
      } else {
        modal.style.display = "block";
      }
    });

    modalClose.addEventListener("click", () => {
      const topClose = () => {
        let idInterval;
        let count = 15;

        const close = () => {
          if (count >= 0) {
            count--;
            modalContent.style.top = count * 10 + "px";
            idInterval = requestAnimationFrame(close);
          } else {
            cancelAnimationFrame(idInterval);
            modal.style.display = "none";
          }
        };
        idInterval = requestAnimationFrame(close);
      };

      if (window.innerWidth > 768) {
        topClose();
      } else {
        modal.style.display = "none";
      }
    });
  });

  console.log(window.innerWidth);
};

export default modal;
