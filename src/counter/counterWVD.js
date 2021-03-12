import hh from 'hyperscript-helpers'
import { h, diff, patch } from 'virtual-dom'
import createElement from 'virtual-dom/create-element'
import './styles/counter.css'

const { div, button } = hh(h)

const message = {
  ADD: 'ADD',
  SUBSTRACT: 'SUBSTRACT'
}

function update (msg, count) {
  switch (msg) {
    case message.ADD:
      return count + 1
    case message.SUBSTRACT:
      return count - 1
    default:
      return count
  }
}

function view (dispatch, count) {
  return div({ className: 'button-wrapper' }, [
    div({ className: 'button-label' }, `Count: ${count}`),
    button(
      {
        className: 'button-plus',
        onclick: () => dispatch(message.ADD)
      },
      '+'
    ),
    button(
      {
        className: 'button-minus',
        onclick: () => dispatch(message.SUBSTRACT)
      },
      '-'
    )
  ])
}
//

function app (initCount, update, view, ele) {
  let count = initCount
  let currentView = view(dispatch, count)

  let rootEle = createElement(currentView)
  ele.appendChild(rootEle)

  function dispatch (msg) {
    count = update(msg, count)
    const updatedView = view(dispatch, count)
    // changed since last rendered
    const patches = diff(currentView, updatedView)
    // passing min changes needed
    rootEle = patch(rootNode, patches)
    currentView = updatedView
  }
}

const rootApp = document.getElementById('app')

app(0, update, view, rootApp)
