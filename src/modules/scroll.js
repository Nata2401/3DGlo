const scrollSmooth = () => {
  const toServiceBtn = document.querySelector(".main>a");

  toServiceBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const blockID = toServiceBtn.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};
export default scrollSmooth;
