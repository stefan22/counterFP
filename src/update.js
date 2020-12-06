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
  console.log(model);
  switch (msg.type) {
    case MSGS.SHOW_FORM:
      return {
        ...model,
        showForm: msg.showForm,
      };
  }
  console.log(model);
  return model;
}

export default update;
