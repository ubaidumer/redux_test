import { ADD_CHARACTER ,REMOVE_CHARACTER,UPDATE_STRENGTH } from './../actions/index';
import characters_json from '../data/characters.json';
import createCharacter from './helpers';
function characters(state=characters_json,action){
    switch(action.type){
        case ADD_CHARACTER:
            let addcharacters = state.filter(item=> item.id!=action.id);
            return addcharacters;
        case REMOVE_CHARACTER:
            let  removecharacters = [...state,createCharacter(action.id)];
            return removecharacters;
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

export default characters;