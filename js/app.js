import resizer from "./extras/resizer.js";
import woobleFunc from "./extras/wooble.js";

let woobleLIs = document.querySelectorAll("section.container-sm li");

// apply wooble func on the section LIS
woobleLIs.forEach((woobleLI) => woobleFunc(woobleLI));

// img height resize
resizer();
