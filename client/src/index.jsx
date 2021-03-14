import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from './app_container.js'
import TimerContainer from './components/timer/timer_container.js'
import store from './store/store.js'

render(
    <Provider store={store}>
        <AppContainer/>
        <TimerContainer />
    </Provider>,
    document.getElementById('root')
)