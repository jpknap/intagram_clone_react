import CONSTANTS from './CONSTANTS';

export const actionRegistro = (values) => {

  return {
    type: CONSTANTS.REGISTRO,
    data: values,
  };
};

export const actionLogin = values => ({
  type: CONSTANTS.LOGIN_USUARIO,
  data: values,
});
