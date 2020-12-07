const MSGS = {
  SHOW_FORM: 'SHOW_FORM',
  MEAL_NAME: 'MEAL_NAME',
  CALORIE_VALUE: 'CALORIE_VALUE',
};

export function showFormMsg(showForm) {
  return {
    type: MSGS.SHOW_FORM,
    showForm,
  };
}

export function mealNameMsg(description) {
  return {
    type: MSGS.MEAL_NAME,
    description,
  };
}

export function calorieValueMsg(calories) {
  return {
    type: MSGS.CALORIE_VALUE,
    calories,
  };
}

function update(msg, model) {
  switch (msg.type) {
    case MSGS.SHOW_FORM:
      return {
        ...model,
        showForm: msg.showForm,
        description: '',
        calories: 0,
      };
    case MSGS.MEAL_NAME:
      return {
        ...model,
        description: msg.description,
      };

    case MSGS.CALORIE_VALUE:
      return {
        ...model,
        calories: msg.calories,
      };
  }
  return model;
}

export default update;
