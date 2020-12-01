import h from "hyperscript";
import hh from "hyperscript-helpers";

const { div, button } = hh(h);

const initCount = 0;

function view(count) {
  return div([
    div(`Count: ${count}`),
    button("+"),
    button("-"),
  ]);
}

const rootApp = document.getElementById("app");

rootApp.appendChild(view(initCount));
