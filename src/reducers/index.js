import { combineReducers } from 'redux';

import characters from './characters_reducer';
import heros from './heroes.reducer';

const rootReducer = combineReducers(
{ 
    characters,
    heros
}
)
export default rootReducer;