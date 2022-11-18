//valor inicial en el que inicia el reducer
const initialState = {
  isLoading: false,
  data: [],
  error: {}
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {    //se utiliza action.TYPE x convención, el type es como el ID del action
    default: 
    return state; 
    //regresamos el estado en caso de que no funcione ningun caso, entonces devolvemos algo controlado por nosotros y no un UNDEFINED..

    
}
};


//un reducer por archivo...
export default resultsReducer;