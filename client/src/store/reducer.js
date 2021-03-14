const   ANIMALS_JSON = 'ANIMALS_JSON/main',
        COUPLE_CHEK = 'COUPLE_CHEK/main',
        CHANGE_ANIMALS = 'CHANGE_ANIMALS/main',
        SET_START_GAME = 'SET_START_GAME/main',
        END_GAME = 'END_GAME/main'


const initialState = {
    animals: [],
    couple: [],
    fullCouple: false,
    gameover: false,
    startGame: null
}

export default function reducer (s = initialState , a) {
    let s1, gameover
    switch (a.type) {
        case ANIMALS_JSON:
            return { ...s , animals: a.data, gameover: false}
        case END_GAME:
            return { ...s , gameover: false}
        case SET_START_GAME:
            return { ...s , startGame: a.data}
        case COUPLE_CHEK:
            s.couple.length < 2 ? s1 = [...s.couple, a.data ] : s1 = [a.data]
            !a.data && (s1 = [])
            return { ...s ,  couple: s1, fullCouple: s1.length === 2 ? true : false }
        case CHANGE_ANIMALS:
                s1 = s.animals.map( el => { 
                    if(el === s.couple[0]){
                        el = null
                    }
                    return el
                })    
                if( s1.filter(el => el !== null  ).length === 0 ) gameover = true
            return { ...s, animals: s1, gameover }
        default:
            return s
    }
}

export const setAnimals = data => { return { type: ANIMALS_JSON, data } }
export const setCouple = data => { return { type: COUPLE_CHEK, data } }
export const changeAnimals = () => { return { type: CHANGE_ANIMALS } }
export const setStartGame = data => { return { type: SET_START_GAME, data } }
export const endGame = data => { return { type: END_GAME, data } }