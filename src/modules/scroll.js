const scrollSmooth = () => {
  const toServiceBtn = document.querySelector("a");

  toServiceBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const blockID = toServiceBtn.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
    });
  });
};
export default scrollSmooth;
