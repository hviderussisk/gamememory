import { connect } from "react-redux"
import AreaCard from "./app.jsx"
import { changeAnimals, setCouple } from './store/reducer'


const mapStateToProps = state => {
    const s = state.main
    return {
        animals: s.animals,
        couple: s.couple,
        fullCouple: s.fullCouple
    }
}

const AppContainer = connect(mapStateToProps, { changeAnimals, setCouple })(AreaCard)

export default AppContainer