const MSGS = {
  SHOW_FORM: 'SHOW_FORM',
};

export function showFormMsg(showForm) {
  return {
    type: MSGS.SHOW_FORM,
    showForm,
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
  }
  return model;
}

export default update;
