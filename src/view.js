import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import model from './model';
import './styles/calcounter.css';

const { pre, div, h1, button, label, input, form } = hh(h);
const { description, calories } = model;

function fieldset(lb, inpt) {
  return div({ className: 'cal-field' }, [
    label({ className: 'cal-label' }, lb),
    input({
      className: 'cal-input',
      type: 'text',
      value: inpt,
    }),
  ]);
}

function formView(dispatch, model) {
  return form({ className: 'cal-form' }, [
    fieldset('Meal', description),
    fieldset('Calories', calories),
    button({ className: 'cal-btn' }, 'Add Meal'),
  ]);
}

function view(dispatch, model) {
  return div({ className: 'cal-wrapper' }, [
    h1({ className: 'cal-heading' }, 'Calories'),
    formView(dispatch, model),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;
