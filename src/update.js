const MSGS = {
  SHOW_FORM: 'SHOW_FORM',
  MEAL_NAME: 'MEAL_NAME',
  CALORIE_VALUE: 'CALORIE_VALUE',
  SAVE_MEAL: 'SAVE_MEAL'
}

export function showFormMsg (showForm) {
  return {
    type: MSGS.SHOW_FORM,
    showForm
  }
}

export function mealNameMsg (description) {
  return {
    type: MSGS.MEAL_NAME,
    description
  }
}

export function calorieValueMsg (calories) {
  return {
    type: MSGS.CALORIE_VALUE,
    calories:
      typeof calories === 'string'
        ? parseInt(calories)
        : calories
  }
}

export const saveMealMsg = {
  type: MSGS.SAVE_MEAL
}

function update (msg, model) {
  switch (msg.type) {
    case MSGS.SHOW_FORM:
      return {
        ...model,
        showForm: msg.showForm,
        description: '',
        calories: 0
      }
    case MSGS.MEAL_NAME:
      return {
        ...model,
        description: msg.description
      }

    case MSGS.CALORIE_VALUE:
      return {
        ...model,
        calories: msg.calories
      }

    case MSGS.SAVE_MEAL:
      return addMealMsg(msg, model)
  }
  return model
}

function addMealMsg (msg,model) {
  const { nextId, description, calories } = model
  const meal = { id: nextId, description, calories }
  const meals = [...model.meals, meal]
  return {
    ...model,
    meals,
    nextId: nextId + 1,
    description: '',
    calories: 0,
    showForm: false
  }
}

export default update
