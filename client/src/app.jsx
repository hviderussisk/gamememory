import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import s from './app.module.sass'
import CardContainer from './components/card/card_container'

const AreaCard = props => {
    const { couple, fullCouple, animals, changeAnimals, setCouple } = props
    const   dispatch = useDispatch(),
            area = useRef(null),
            [node, setNode] = useState([]),
            [tid, setTid] = useState([])
            
    useEffect(() => dispatch({type:'ANIMALS_JSON'}) , [])

    useEffect(() => {
        let timeoutId
        if (node.length === 1) {
            timeoutId = setTimeout(() => {
                setCouple(false)
                setNode([])
                hidden()
            }, 5000)
            setTid([...tid, timeoutId])
        }
        fullCouple && (couple[0] === couple[1]) && changeAnimals()
        if (fullCouple){
            tid.forEach( id => clearTimeout(id))
            timeoutId = setTimeout(() => hidden() , 500)
            setTid([...tid, timeoutId])
        } 
    }, [node])

    const hidden = () => {
        node.forEach( node => {
            node.childNodes.forEach( el => {
                node.animate([
                    {transform: 'rotateY(0deg) scale(1)'},
                    {transform: 'perspective(400px) rotateY(180deg) scale(1.3)'},
                    {transform: 'perspective(400px) rotateY(360deg) scale(1)'}
                ], 300)
                setTimeout(() => el.style.visibility = 'hidden' , 150)
            } )
            setTimeout(() => node.childNodes[1].style.visibility = 'visible' , 150) 
        })
    }
    const propsObj = { setNode, node, hidden }

    const ListCard = animals.map( el => <CardContainer {...propsObj} src={el} />)
    
    return  <div ref={area} className={s.area}> 
                {ListCard}
            </div>
}

export default AreaCard