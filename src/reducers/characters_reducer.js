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
            let updatecharacters = state.find(item=> item.id ===action.id );
            if(updatecharacters!= undefined){
                updatecharacters.strength= updatecharacters.strength+1;
                console.log("ok",...state,  updatecharacters)
                return  [...state];
                
            }else{
                return state;
            }
        default:
            return state;
    }
}

export default characters;