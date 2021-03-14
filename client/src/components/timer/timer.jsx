import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import s from './timer.module.sass'

function Timer(props){

    const { gameover, setStartGame, endGame, startGame } = props

    const [time, setTime] = useState(null)
    const [min, setMin] = useState(0)
    const [count, setCount] = useState(null)
    const [visibleButton, setVisible] = useState(true)
    const dispatch = useDispatch()

    const start = () => {
        endGame(false)
        setTime(0)
        dispatch({type:'ANIMALS_JSON'})
        setVisible(false)
        setStartGame(true)
    }

    useEffect(() => {
        let t
        if(!gameover && time !== null) { 
            t = setInterval(() => {
                if(time === 59){
                    setMin(min + 1)
                    setTime(0)
                } else {
                    setTime(time + 1)
                }
            }  , 1000) 
        }
        if(gameover) {
            setStartGame(false) 
            clearInterval(t)
        }
        return () => clearInterval(t)
      }, [time])

      useEffect(() => {
        if(!startGame) {
            const c = (180/(time + min*60))*1000
            setCount(c)  
            setTime(null)
            setMin(0)
        }
      } , [startGame])
    
    return (
            <>
                { visibleButton ? <button onClick={start} className={s.startButton}>Начать</button> : null }
                { startGame ? <div className={s.time}>{min === 0 ? null : `${min}:`}{ time < 10 && time ? `0${time}`: !time ? '00' : `${time}`}</div> : null }  
                { gameover ? <Count count={count} start={start} /> : null }
            </>
    )
}

export default Timer


function Count(props) {
    const {start, count} = props,
    [render, setRender] = useState(false),
    [renderCount, setRenderCount] = useState(false)
    
    useEffect(() => {
        setTimeout(() => setRender(true) , 500 )
    },[])

    useEffect(() => {
        setTimeout(() => setRenderCount(true), 300 )
    }, [render])
    return (render ? <div className={s.countTable}>
                                Счёт:&nbsp;
                                {renderCount ? <span> { Math.ceil(count) } </span>: null}
                                <button onClick={start} className={s.intoCountButton}>Го ещё!</button>
                    </div> : null )
}