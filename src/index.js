import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validate from "./modules/validate";
import tabs from "./modules/tabs";
import scrollSmooth from "./modules/scroll";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("25 december 2021");
menu();
modal();
validate();

sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({ formId: "form2" });
sendForm({ formId: "form3" });

tabs();
scrollSmooth();
slider(
  ".portfolio-content",
  ".portfolio-item",
  ".portfolio-dots",
  "portfolio-item-active",
  "dot-active"
);
calc(100);
