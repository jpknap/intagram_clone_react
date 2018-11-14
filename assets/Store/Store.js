import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';

// Funcion reducer
const reducerDemo = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};
// curring function
const miMiddlewareDemo = store => next => (action) => {
  console.log('se ejecuta el middleware');
};

const lastMiddleware= store => next => (action) => {
  console.log('ultimo middleware');
  next(action);
};

// version simplificada el key del objeto queda como el nombre de la variable, intedra el store del form
const reducers = combineReducers({
  reducerDemo,
  form,
});

// El store lo extrae del mismo reducer
const Store = createStore(reducers, applyMiddleware(miMiddlewareDemo, lastMiddleware));

export default Store;
