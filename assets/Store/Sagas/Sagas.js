import { takeEvery, call } from 'redux-saga/effects';
import { authenticated, dataBase } from '../Services/FireBase';

const registrarWithFireBase = values => authenticated.createUserWithEmailAndPassword(values.email, values.password)
  .then(success => success.user.toJSON());

const registrarInDataBase = ({ uid, email, nombre }) => {
  dataBase.ref(`usuarios/${uid}`).set({
    nombre,
    email,
  });
};

const loginUsuarioFireBase = values => authenticated.signInWithEmailAndPassword(values.email, values.password).then(success => success.user.toJSON());

function* registrarUsuario(values) {
  try {
    const returned_fireBase = yield call(registrarWithFireBase, values.data);
    const { uid, email } = returned_fireBase;
    const { data: { nombre } } = values;
    yield call(registrarInDataBase, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

function* loginUsuario(values) {
  try {
    const return_login = yield call(loginUsuarioFireBase, values.data);
    console.log(return_login);
  } catch (error) {
    console.log(error);
  }
}

export default function* primeraSaga() {
  yield takeEvery('REGISTRAR', registrarUsuario);
  yield takeEvery('LOGIN_USUARIO', loginUsuario);
}
