import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
//import model from './model';
import { showFormMsg } from './update';
import './styles/calcounter.css';

const { pre, div, h1, button, label, input, form } = hh(h);

function fieldset(labelText, inputValue) {
  return div({ className: 'cal-field' }, [
    label({ className: 'cal-label' }, labelText),
    input({
      className: 'cal-input',
      type: 'text',
      value: inputValue,
    }),
  ]);
}

function buttonSet(dispatch) {
  return div({ className: 'cal-btn-wrap' }, [
    button(
      {
        className: 'cal-btn',
        type: 'submit',
      },
      'Save',
    ),
    button(
      {
        className: 'cal-btn',
        type: 'button',
        onclick: () => dispatch(showFormMsg(false)),
      },
      'Cancel',
    ),
  ]);
}

function formView(dispatch, model) {
  const { description, calories, showForm } = model;
  if (showForm) {
    return form(
      {
        className: 'cal-form',
        onsubmit: e => {
          e.preventDefault();
        },
      },
      [
        fieldset('Meal', description),
        fieldset('Calories', calories || ''),
        buttonSet(dispatch),
      ],
    );
  }

  return button(
    {
      className: 'cal-btn',
      onclick: () => dispatch(showFormMsg(true)),
    },
    'Add Meal',
  );
}

function view(dispatch, model) {
  return div({ className: 'cal-wrapper' }, [
    h1({ className: 'cal-heading' }, 'Calorie Counter'),
    formView(dispatch, model),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;
