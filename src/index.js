import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validate from "./modules/validate";
import tabs from "./modules/tabs";
import scrollSmooth from "./modules/scroll";
import slider from "./modules/slider";

timer("25 december 2021");
menu();
modal();
validate();
tabs();
scrollSmooth();
slider(
  ".portfolio-content",
  ".portfolio-item",
  ".portfolio-dots",
  "portfolio-item-active",
  "dot-active"
);
