import { ADD_CHARACTER, REMOVE_CHARACTER,UPDATE_STRENGTH } from './../actions/index';
import createCharacter from './helpers';

function heros(state=[],action){
    switch(action.type){

        case ADD_CHARACTER:
            let addheros = [...state,createCharacter(action.id)];
            return addheros;
        case REMOVE_CHARACTER:
            let removeheros= state.filter(item=> item.id !== action.id);
            return removeheros;
        case UPDATE_STRENGTH:
            for (let i =0 ; i <state.length;i++){
                if(state[i].id == action.id){
                    state[i].strength=action.strength+1;
                }
            }
            console.log("hello",state)
            let update=state;
            return update;
        default:
            return state;
    }
}

export default heros;