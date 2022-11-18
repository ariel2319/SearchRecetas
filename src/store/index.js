import { configureStore } from '@reduxjs/toolkit'
//viene en el paquete y lo que hace es configurar automáticamente el store del reduxe
import reducers from '../reducers'


export default   configureStore({
  reducer: {
    //aquí van los reducers que creemos

    reducer : reducers,
    
  },
})