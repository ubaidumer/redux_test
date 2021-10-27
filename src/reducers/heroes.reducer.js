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

            let updateheros = state.find(item=> item.id ===action.id );
            if(updateheros!= undefined){
                console.log("heros update",updateheros)
                updateheros.strength= updateheros.strength+1;
                console.log("ok",...state, updateheros)
                return  [...state];
            }else{
                return state;
            }
            
        default:
            return state;
    }
}

export default heros;