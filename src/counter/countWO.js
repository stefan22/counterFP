import h from 'hyperscript'
import hh from 'hyperscript-helpers'
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


function app (initCount, update, view, ele) {
  let count = initCount
  let currentView = view(dispatch, count)
  ele.appendChild(currentView)

  function dispatch (msg) {
    count = update(msg, count)
    const updatedView = view(dispatch, count)
    ele.replaceChild(updatedView, currentView)
    currentView = updatedView
  }
}

const rootApp = document.getElementById('app')

app(0, update, view, rootApp)
