import React from 'react'
import s from './card.module.sass'

const Card = props => {

    const { src, setCouple, node, setNode, startGame } = props

    const clickShow = e => {
        setCouple(src)
        
        const c = e.currentTarget,
              nodeEl = c.offsetParent

        node.length < 2 ? setNode([...node, nodeEl]) : setNode([nodeEl])

        c.offsetParent.childNodes.forEach( node => {
            node.animate([
                {transform: 'rotateY(0deg) scale(1)'},
                {transform: 'perspective(400px) rotateY(180deg) scale(1.3)'},
                {transform: 'perspective(400px) rotateY(360deg) scale(1)'}
            ], 300)
            setTimeout(() => { node.style.visibility = 'hidden' }, 150) 
        })
        setTimeout(() => {   
            c.offsetParent.childNodes[0].style.visibility = 'visible' 
        }, 150)
    }

    
    const prop = { clickShow, src, startGame }

    return  <div onLoad={e => {e.target.offsetParent.style.height = e.target.offsetParent.offsetWidth + 'px'} } className={s.contentCard}>
                {src ? <Question {...prop} /> : <Win />}
            </div>
}

export default Card




function Question(props){
    const { clickShow, src, startGame } = props
    return ( 
        <>  
            <img className={s.backSide} src={`src/animals/${src}.png`} />
            <img className={s.img} onClick={startGame ? clickShow : null} src={`src/animals/question.svg`}/>
        </>
    )
}

function Win(props){
    return ( 
        <div className={s.deletedCard}>
           5
        </div>
    )
}