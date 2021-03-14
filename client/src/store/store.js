import { applyMiddleware, combineReducers, createStore } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { watcher } from './sagas'

let reducers = combineReducers({
    main: reducer
})

const saga = createSagaMiddleware(),

store = createStore(reducers, applyMiddleware(saga))

saga.run(watcher)

export default store