import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga'
import funcionPrimaria from './Sagas/Sagas'


// Funcion reducer
const reducerDemo = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

// version simplificada el key del objeto queda como el nombre de la variable, intedra el store del form
const reducers = combineReducers({
  reducerDemo,
  form,
});
// El store lo extrae del mismo reducer
const Store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);

export default Store;
