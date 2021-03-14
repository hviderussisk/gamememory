import { connect } from "react-redux"
import Card from "./card.jsx"
import { setCouple } from '../../store/reducer'


const mapStateToProps = state => {
    const s = state.main
    return {
        startGame: s.startGame
    }
}

const CardContainer = connect( mapStateToProps, { setCouple })(Card)
export default CardContainer