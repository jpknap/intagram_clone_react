import { takeEvery, call } from 'redux-saga/effects';
import { authenticated, dataBase } from '../Services/FireBase';

const registrarWithFireBase = values => authenticated.createUserWithEmailAndPassword(values.email, values.password)
  .then((success) => success.user.toJSON());

const registrarInDataBase = ({ uid, email, nombre }) => {
  dataBase.ref(`usuarios/${uid}`).set({
    nombre,
    email,
  }, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("sasas");
    }
  });
};

function* registrarUsuario(values) {
  try {
    const returned_fireBase = yield call(registrarWithFireBase, values.data);
    const { uid, email } = returned_fireBase;
    const { data: { nombre } } = values;
    const returned_dataBase = yield call(registrarInDataBase, { uid, email, nombre });
    console.log(returned_dataBase);
  } catch (error) {
    console.log(error);
  }
}

export default function* primeraSaga() {
  yield takeEvery('REGISTRAR', registrarUsuario);
}
