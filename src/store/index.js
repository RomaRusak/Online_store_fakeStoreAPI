import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { persistStore } from 'redux-persist'

const store = createStore(rootReducer)

const persistor = persistStore(store)

export {persistor}

export default store