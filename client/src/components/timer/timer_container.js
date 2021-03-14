import { connect } from "react-redux"
import Timer from "./timer.jsx"
import { setStartGame, endGame } from './../../store/reducer'


const mapStateToProps = state => {
    const s = state.main
    return {
        gameover: s.gameover,
        startGame: s.startGame
    }
}

const TimerContainer = connect( mapStateToProps, { setStartGame, endGame })(Timer)
export default TimerContainer