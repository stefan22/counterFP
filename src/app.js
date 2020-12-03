import { h, diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';

function app(initModel, update, view, rootApp) {
  let model = initModel;
  let currentView = view(dispatch, model);
  let rootVD = createElement(currentView);
  rootApp.appendChild(rootVD);

  function dispatch(msg, model) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    const patches = diff(currentView, updatedView);
    rootVD = patch(rootApp, patches);
    currentView = updatedView;
  }
}

export default app;
