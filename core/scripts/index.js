import { Validation } from "./validation.module.js";
import { Counter } from "./counter.module.js";
import { Fire } from "./Fire.module.js";

const nav = document.getElementById("nav");
const goTop = document.getElementById("goTop");
let newScrollVal = 0;
let scrollYVal = 0;

new Fire();

// ========  Change navbar ========
window.addEventListener("scroll", function () {
  scrollYVal = this.scrollY;
  newScrollVal < scrollYVal
    ? nav.classList.add("nav-hidden")
    : nav.classList.remove("nav-hidden");
  scrollY > 0
    ? nav.classList.add("bg-second-color")
    : nav.classList.remove("bg-second-color");
  newScrollVal = scrollYVal;
});

// ========= go top =========
goTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// ========= counter =========
const counter = new Counter(
  [100, 200, 300, 400], // targetVals
  "achievement", // sectionId
  ["counter1", "counter2", "counter3", "counter4"] // counterIds
);
// ========= validation =========
new Validation(
  "form",
  ["name", "email", "subject", "message"],
  ["nameError", "emailError", "subjectError", "messageError"]
);
