import { call, put, takeEvery } from 'redux-saga/effects'
import { setAnimals } from './reducer'

async function f(){
    let res = await fetch('http://localhost:5000/animals/animals').then((res, rej) => res.json())
    res = [...res, ...res]
    res.sort(() => Math.random() - 0.5)
    return res
}

function * worker(){
    const res = yield call(f)
    yield put(setAnimals(res))
}

export function* watcher(){
    yield takeEvery('ANIMALS_JSON', worker)
}